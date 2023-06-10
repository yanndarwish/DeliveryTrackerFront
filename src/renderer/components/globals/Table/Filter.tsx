import ClientsFilter from './filters/ClientsFilter';
import { TableNames } from 'renderer/interfaces';
import StatusFilter from './filters/StatusFilter';
import DeliveriesFilter from './filters/DeliveriesFilter';

export interface IFilterProps {
  searchRef: React.RefObject<HTMLInputElement>;
  handleSearch: (searchString: string) => void;
  name: TableNames;
  filterObject: object;
  setfilterObject: React.Dispatch<React.SetStateAction<object>>;
}

const Filter = (props: IFilterProps) => {
  return (
    <div className="flex flex-col gap-4">
      <form autoComplete="false" className="flex flex-col gap-4">
        {props.name !== 'deliveries' && (
          <div>
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium sr-only"
            >
              Rechercher
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                ref={props.searchRef}
                className="input input-bordered pl-10 w-full sm:w-auto"
                placeholder="Rechercher"
                onChange={(e) => props.handleSearch(e.target.value)}
                required
              />
            </div>
          </div>
        )}
        <div className="flex gap-4">
          {props.name !== 'deliveries' && (
            <StatusFilter
              filterObject={props.filterObject}
              setfilterObject={props.setfilterObject}
            />
          )}
          {props.name === 'clients' && (
            <ClientsFilter
              filterObject={props.filterObject}
              setfilterObject={props.setfilterObject}
            />
          )}
          {props.name === 'deliveries' && (
            <DeliveriesFilter
              filterObject={props.filterObject}
              setfilterObject={props.setfilterObject}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Filter;
