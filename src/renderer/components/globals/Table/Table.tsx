import { useEffect, useRef, useState } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { TableNames } from 'renderer/interfaces';
import {
  handleSorting,
  handleSearching,
  handleFiltering,
} from 'renderer/utils';
import Filter from './Filter';
import XLSX from 'xlsx';

export interface ITableProps {
  data: any[];
  columns: any[];
  name: TableNames;
}

const Table = (props: ITableProps) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [sortField, setSortField] = useState<string>('');
  const [filterObject, setfilterObject] = useState<object>({});
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
    setFilteredData(
      handleSearching(handleFiltering(props.data, filterObject), searchString)
    );
  };

  const handleFilter = () => {
    setFilteredData(handleFiltering(props.data, filterObject));
  };

  useEffect(() => {
    handleSort();
  }, [order, sortField]);

  useEffect(() => {
    handleFilter();
  }, [filterObject]);

  return (
    <div className="flex flex-col gap-8">
      <Filter
        name={props.name}
        searchRef={searchRef}
        handleSearch={handleSearch}
        filterObject={filterObject}
        setfilterObject={setfilterObject}
      />
      <button
        onClick={() => exportToExcel()}
        className="btn btn-secondary fixed bottom-8 right-9"
      >
        Export
      </button>
      <div className="relative flex flex-col gap-6 overflow-x-auto shadow-md sm:rounded-lg">
        <table id="table" className="table table-zebra w-full">
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
    </div>
  );
};

export default Table;
