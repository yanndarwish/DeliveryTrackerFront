import { MdCheck, MdClose } from 'react-icons/md';
import {
  Client,
  Driver,
  ColumnBase,
  Vehicle,
  Provider,
} from 'renderer/interfaces';
import {
  getKeyByValue,
  getClientsNames,
  getDriversNames,
  getVehiclesNames,
  getProviderName,
  getClientsDetails,
  formatDate,
  getGroupsNames,
} from 'renderer/utils';
import { drivers, vehicles, providers, clients, groups } from 'renderer/mock';

export interface ITableBodyProps {
  tableData: any[];
  columns: ColumnBase[];
  onClick: (id: string) => void;
}

const checkMark = () => {
  return (
    <div className="flex justify-center items-center rounded-full aspect-square h-8 border border-success text-success">
      <MdCheck size={24} />
    </div>
  );
};

const closeMark = () => {
  return (
    <div className="flex justify-center items-center rounded-full aspect-square h-8 border border-error text-error">
      <MdClose size={24} />
    </div>
  );
};

const TableBody = (props: ITableBodyProps) => {
  return (
    <tbody>
      {props.tableData?.map((data, i) => (
        <tr key={data._id} onClick={() => props.onClick(data._id)}>
          {props.columns.map(({ accessor, type }, i) => {
            let tData;
            // translate data into readable strings (ids, non-formatted dates...)
            if (type === 'IDArray') {
              // find driver
              if (getKeyByValue(data, data[accessor]) === 'driver') {
                let ids = data[accessor] as string[];
                tData = getDriversNames(ids, drivers as Driver[]);
                // find vehicle
              } else if (getKeyByValue(data, data[accessor]) === 'vehicle') {
                let ids = data[accessor] as string[];
                tData = getVehiclesNames(ids, vehicles as Vehicle[]);
                // find client
              } else if (getKeyByValue(data, data[accessor]) === 'clients') {
                let ids = data[accessor] as string[];
                tData = getClientsNames(ids, clients as Client[]);
              } else if (getKeyByValue(data, data[accessor]) === 'group') {
                let ids = data[accessor] as string[];
                tData = getGroupsNames(ids, groups);
              }
            } else if (type === 'IDString') {
              // find provider
              if (getKeyByValue(data, data[accessor]) === 'provider') {
                tData = getProviderName(
                  data[accessor],
                  providers as Provider[]
                );
                // find pickup client
              } else if (accessor === 'pickup-client') {
                let ids: string[] = [];
                data.pickups.forEach((pickup: { client: string }) => {
                  ids.push(pickup.client);
                });
                tData = getClientsDetails(ids, clients as Client[]);
                // find dropoff client
              } else if (accessor === 'dropoff-client') {
                let ids: string[] = [];
                data.dropoffs.forEach((dropoff: { client: string }) => {
                  ids.push(dropoff.client);
                });
                tData = getClientsDetails(ids, clients as Client[]);
              }
            } else if (type === 'date') {
              // find pickup date
              if (accessor === 'pickup-date') {
                let dates: string[] = [];
                data.pickups.forEach((pickup: { date: string }) => {
                  dates.push(formatDate(pickup));
                });
                tData = dates.join(', ');
              }
            } else {
              tData = data[accessor] !== null ? data[accessor] : '——';
              tData =
                tData === true
                  ? checkMark()
                  : tData === false
                  ? closeMark()
                  : tData;
            }

            return (
              <td
                key={accessor}
                className={`whitespace-nowrap px-4 py-4 ${
                  i === 0 ? 'uppercase' : 'capitalize'
                }`}
              >
                {tData}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
