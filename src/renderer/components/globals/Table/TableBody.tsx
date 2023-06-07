import { MdCheck, MdClose } from 'react-icons/md';
import { ColumnBase } from 'renderer/interfaces';
import { getKeyByValue } from 'renderer/utils';
import { drivers, vehicles, providers, clients } from 'renderer/mock';

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
            if (type === 'IDArray') {
              // find driver
              if (getKeyByValue(data, data[accessor]) === 'driver') {
                // find driver in drivers by id
                let ids = data[accessor] as string[];
                let localDrivers: any[] = [];
                ids.forEach((id) => {
                  localDrivers.push(drivers.find((d) => d._id === id));
                });

                tData = localDrivers.map((d) => d.firstName).join(', ');
                // find vehicle
              } else if (getKeyByValue(data, data[accessor]) === 'vehicle') {
                let ids = data[accessor] as string[];
                let localVehicles: any[] = [];
                ids.forEach((id) => {
                  localVehicles.push(vehicles.find((d) => d._id === id));
                });

                tData = localVehicles
                  .map((d) => `${d.model} - ${d.immatriculation}`)
                  .join(', ');
                  // find client
              } else if (getKeyByValue(data, data[accessor]) === 'clients') {
                let ids = data[accessor] as string[];
                let localClients: any[] = [];
                ids.forEach((id) => {
                  localClients.push(clients.find((d) => d._id === id));
                });

                tData = localClients
                  .map((d) => d.name)
                  .join(', ');
              }
              // find provider
            } else if (type === 'IDString') {
              if (getKeyByValue(data, data[accessor]) === 'provider') {
                // find provider in providers by id
                let provider = providers.find(p => p._id === data[accessor])

                tData = provider?.name;
            }} else {
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
