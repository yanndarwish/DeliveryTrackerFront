import { useEffect, useState } from 'react';
import { MdCheck, MdClose } from 'react-icons/md';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { useSortableTable } from 'renderer/useSortableTable';

export interface ITableProps {
  data: any[];
  columns: any[];
}

const Table = (props: ITableProps) => {
  const [tableData, handleSorting] = useSortableTable(
    props.data,
    props.columns
  );

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <TableHead columns={props.columns} handleSorting={handleSorting} />
        <TableBody columns={props.columns} tableData={tableData as any[]} />
      </table>
    </div>
  );
};

export default Table;
