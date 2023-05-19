import { MdCheck, MdClose } from 'react-icons/md';

export interface ITableProps {
  header: { title: string; field: string[] }[];
  data: any[];
}

const Table = (props: ITableProps) => {
  return (
    <div className="relative flex flex-col overflow-x-auto pt-6">
      <div className="inline-block min-w-full py-2">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm font-light">
            {/* Table Header */}
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-4 py-4">
                  N°
                </th>
                {props.header.map((item, index) => (
                  <th scope="col" className="px-4 py-4" key={index}>
                    {item.title}
                  </th>
                ))}
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {props.data.map((row, i) => (
                <tr
                  key={row._id}
                  data-id={row._id}
                  className="border-b dark:border-neutral-500"
                >
                  <td className="whitespace-nowrap px-4 py-4 font-medium">
                    {i + 1}
                  </td>
                  {props.header.map((item, i) => (
                    <td
                      key={i}
                      className={`whitespace-nowrap px-4 py-4 font-medium ${
                        i === 0 ? 'uppercase' : 'capitalize'
                      } ${
                        row[item.field[0]] === true
                          ? 'text-emerald-500'
                          : row[item.field[0]] === false && 'text-red-500'
                      }`}
                    >
                      {item.field.length > 1 && row[item.field[0]] !== null ? (
                        row[item.field[0]] + ' ' + row[item.field[1]]
                      ) : item.field.length > 1 &&
                        row[item.field[0]] === null ? (
                        row[item.field[1]]
                      ) : row[item.field[0]] === true ? (
                        <MdCheck size={24} />
                      ) : row[item.field[0]] === false ? (
                        <MdClose size={24} />
                      ) : (
                        row[item.field[0]]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
