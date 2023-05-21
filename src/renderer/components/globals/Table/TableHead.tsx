import { useState } from 'react';

export interface ITableHeadProps {
  columns: any[];
  handleSorting: any;
}

const TableHead = (props: ITableHeadProps) => {
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  const handleSortingChange = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    props.handleSorting(accessor, sortOrder);
  };

  return (
    <thead className="text-xs uppercase bg-neutral-800 text-neutral-200">
      <tr>
        {props.columns.map(({ label, accessor, sortable }, i) => {
          const cl = sortable
            ? sortField === accessor && order === 'asc'
              ? 'up'
              : sortField === accessor && order === 'desc'
              ? 'down'
              : 'default'
            : '';
          return (
            <th
              key={accessor}
              onClick={
                sortable ? () => handleSortingChange(accessor) : undefined
              }
              className={`px-4 py-3 ${cl} ${sortable ? 'cursor-pointer' : ''}`}
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
