import { useEffect, useRef, useState } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { handleSorting, handleFiltering } from 'renderer/utils';
import Filter from './Filter';

export interface ITableProps {
  data: any[];
  columns: any[];
}

const Table = (props: ITableProps) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');
  const [filteredData, setFilteredData] = useState<any[]>(props.data);

  const handleSort = () => {
    setFilteredData(handleSorting(filteredData, sortField, order));
  };

  const handleSearch = (searchString: string) => {
    setFilteredData(handleFiltering(props.data, searchString));
  };

  useEffect(() => {
    handleSort();
  }, [order, sortField]);

  return (
    <div className="relative flex flex-col gap-6 overflow-x-auto shadow-md sm:rounded-lg">
      <Filter searchRef={searchRef} handleSearch={handleSearch} />
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <TableHead
          columns={props.columns}
          handleSorting={handleSorting}
          sortField={sortField}
          setSortField={setSortField}
          order={order}
          setOrder={setOrder}
        />
        <TableBody columns={props.columns} tableData={filteredData} />
      </table>
    </div>
  );
};

export default Table;
