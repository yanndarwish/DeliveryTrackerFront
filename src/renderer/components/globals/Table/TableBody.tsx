import { MdCheck, MdClose } from 'react-icons/md';
import { ColumnBase, DeliveryColumn } from 'renderer/interfaces';

export interface ITableBodyProps {
  tableData: any[];
  columns: ColumnBase[] | DeliveryColumn[];
  onClick: (id: string) => void
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
          {props.columns.map(({ accessor }, i) => {
            let tData = data[accessor] !== null ? data[accessor] : '——';
            tData =
              tData === true
                ? checkMark()
                : tData === false
                ? closeMark()
                : tData;

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
