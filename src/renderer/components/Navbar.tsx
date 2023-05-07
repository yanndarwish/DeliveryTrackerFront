import { IoMdMenu, IoMdAdd } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav
      id="main-navbar"
      className="flex w-full flex-nowrap items-center justify-between py-4 text-white  bg-transparent lg:flex-wrap lg:justify-start xl:pl-60"
      data-te-navbar-ref
    >
      {/* <!-- Container wrapper --> */}
      <div className="flex w-full flex-wrap items-center justify-between px-4">
        {/* <!-- Toggler --> */}
        <button
          data-te-sidenav-toggle-ref
          data-te-target="#sidenav-1"
          className="block border-0 bg-transparent p-1 rounded-full text-white hover:no-underline hover:shadow-none hover:text-emerald-500  focus:text-emerald-500 hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-emerald-500 focus:ring-0 xl:hidden"
          aria-controls="#sidenav-1"
          aria-haspopup="true"
        >
          <IoMdMenu size={24} />
        </button>

        <button
          className="p-1 rounded-full focus:outline-emerald-500 text-emerald-500 bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-700"
          aria-controls="#create-delivery-panel"
          data-target="#create-delivery-panel"
          aria-haspopup="true"
        >
          <IoMdAdd size={24} />
        </button>
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
  );
};

export default Navbar;
