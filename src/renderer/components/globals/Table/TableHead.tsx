import { Dispatch, SetStateAction } from 'react';

export interface ITableHeadProps {
  columns: any[];
  handleSorting: any;
  sortField: string;
  setSortField: Dispatch<SetStateAction<string>>;
  order: string;
  setOrder: Dispatch<SetStateAction<string>>;
}

const TableHead = (props: ITableHeadProps) => {

  const handleSortingChange = (accessor: string) => {
    const sortOrder =
      accessor === props.sortField && props.order === 'asc' ? 'desc' : 'asc';
    props.setSortField(accessor);
    props.setOrder(sortOrder);
  };

  return (
    <thead>
      <tr>
        {props.columns.map(({ label, accessor, sortable }, i) => {
          const cl = sortable
            ? props.sortField === accessor && props.order === 'asc'
              ? 'up'
              : props.sortField === accessor && props.order === 'desc'
              ? 'down'
              : 'default'
            : '';
          return (
            <th
              key={accessor}
              onClick={
                sortable ? () => handleSortingChange(accessor) : undefined
              }
              className={`px-4 py-4 ${cl} ${sortable ? 'cursor-pointer' : ''}`}
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
