import { MdCheck, MdClose } from 'react-icons/md';

export interface ITableBodyProps {
  tableData: any[];
  columns: any[];
}

const checkMark = () => {
  return (
    <div className="flex justify-center items-center rounded-full aspect-square h-8 border border-emerald-500 text-emerald-500">
      <MdCheck size={24} />
    </div>
  );
};

const closeMark = () => {
  return (
    <div className="flex justify-center items-center rounded-full aspect-square h-8 border border-red-500 text-red-500">
      <MdClose size={24} />
    </div>
  );
};

const TableBody = (props: ITableBodyProps) => {
  return (
    <tbody>
      {props.tableData?.map((data, i) => (
        <tr
          key={data._id}
          className={`border-b border-neutral-700 text-neutral-100 ${
            i % 2 === 0 ? '' : 'bg-neutral-800/40'
          }`}
        >
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
                className={`whitespace-nowrap px-4 py-4 font-medium ${
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
