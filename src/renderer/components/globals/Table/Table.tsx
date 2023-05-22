import { useEffect, useRef, useState } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { handleSorting, handleFiltering } from 'renderer/utils';
import Filter from './Filter';
import XLSX from 'xlsx';

export interface ITableProps {
  data: any[];
  columns: any[];
  name: string;
}

const Table = (props: ITableProps) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');
  const [filteredData, setFilteredData] = useState<any[]>(props.data);

  const exportToExcel = () => {
    let wb = XLSX.utils.table_to_book(document.getElementById('table'));
    XLSX.writeFile(wb, `${props.name}.xlsx`);
  };

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
      <button
        onClick={() => exportToExcel()}
        className="text-emerald-600 border-emerald-600 border-2 hover:text-emerald-500 hover:border-emerald-500 focus:text-emerald-500 focus:outline-emerald-500 uppercase font-medium py-2 px-4 rounded-md"
      >
        Export
      </button>
      <table
        id="table"
        className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
      >
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
