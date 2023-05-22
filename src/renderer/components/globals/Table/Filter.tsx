export interface IFilterProps {
  searchRef: React.RefObject<HTMLInputElement>;
  handleSearch: (searchString: string) => void;
}

const Filter = (props: IFilterProps) => {

  return (
    <div className="flex flex-col gap-4">
      <form autoComplete="false">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium sr-only text-white"
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
            // type="search"
            className="block w-full p-4 pl-10 text-sm border rounded-lg bg-neutral-700 border-neutral-600 placeholder-neutral-400 text-white focus:ring-0 focus:border-emerald-500 focus-visible:outline-emerald-500 active:border-emerald-500 sm:w-64"
            placeholder="Rechercher"
            onChange={(e) => props.handleSearch(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Filter;
