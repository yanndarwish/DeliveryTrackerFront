import { IoMdMenu } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav
      id="main-navbar"
      className="fixed left-0 right-0 top-0 flex w-full flex-nowrap items-center justify-between py-4 text-white border-b-[0.5px] border-slate-400/20 hover:text-sky-400 focus:text-sky-400 bg-transparent lg:flex-wrap lg:justify-start xl:pl-60"
      data-te-navbar-ref
    >
      {/* <!-- Container wrapper --> */}
      <div className="flex w-full flex-wrap items-center justify-between px-4">
        {/* <!-- Toggler --> */}
        <button
          data-te-sidenav-toggle-ref
          data-te-target="#sidenav-1"
          className="block border-0 bg-transparent px-3 text-white hover:no-underline hover:shadow-none hover:text-sky-400 focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 xl:hidden"
          aria-controls="#sidenav-1"
          aria-haspopup="true"
        >
          <IoMdMenu size={24} />
        </button>

        {/* <!-- Right links --> */}
        <ul className="relative flex items-center">
          {/* <!-- Notification dropdown --> */}
          <li className="relative" data-te-dropdown-ref>
            <a
              className="mr-4 flex items-center text-slate-500 hover:text-slate-700 focus:text-slate-700"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
            >
              <span className="dark:text-slate-200 [&>svg]:w-3.5">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bell"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                  ></path>
                </svg>
              </span>
              <span className="absolute -mt-2.5 ml-2 rounded-full bg-red-600 px-1.5 py-[1px] text-[0.6rem] text-white">
                1
              </span>
            </a>
            <ul
              className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
              aria-labelledby="navbarDropdownMenuLink"
              data-te-dropdown-menu-ref
            >
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-slate-700 hover:bg-slate-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-slate-400 dark:text-slate-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  Some news
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-slate-700 hover:bg-slate-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-slate-400 dark:text-slate-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  Another news
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-slate-700 hover:bg-slate-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-slate-400 dark:text-slate-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  Something else here
                </a>
              </li>
            </ul>
          </li>

          {/* <!-- Avatar --> */}
          <li className="relative" data-te-dropdown-ref>
            <a
              className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
            >
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                className="rounded-full"
                style={{ height: '22px', width: '22px' }}
                alt="Avatar"
                loading="lazy"
              />
            </a>
            <ul
              className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
              aria-labelledby="dropdownMenuButton2"
              data-te-dropdown-menu-ref
            >
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-slate-700 hover:bg-slate-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-slate-400 dark:text-slate-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  My profile
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-slate-700 hover:bg-slate-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-slate-400 dark:text-slate-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-slate-700 hover:bg-slate-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-slate-400 dark:text-slate-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
  );
};

export default Navbar;
