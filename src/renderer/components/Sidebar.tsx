import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { User } from 'renderer/interfaces';
import { Sidenav, Dropdown, Ripple, initTE } from 'tw-elements';
import { links } from '../sidebarLinks';
export interface ISidebarProps {
  user: User;
}

const Sidebar = (props: ISidebarProps) => {
  const location = useLocation().pathname;

  const sidenav2 = document.getElementById('sidenav-1');
  const sidenavInstance2 = Sidenav.getInstance(sidenav2);

  let innerWidth2: any = null;

  const setMode2 = () => {
    innerWidth2 = window.innerWidth;

    if (window.innerWidth < sidenavInstance2?.getBreakpoint('xl')) {
      sidenavInstance2?.changeMode('over');
      sidenavInstance2?.hide();
    } else {
      sidenavInstance2?.changeMode('side');
      sidenavInstance2?.show();
    }
  };

  if (window.innerWidth < sidenavInstance2?.getBreakpoint('sm')) {
    setMode2();
  }

  // Event listeners
  window.addEventListener('resize', setMode2);

  useEffect(() => {
    initTE({ Sidenav, Dropdown, Ripple });
  }, []);

  return (
    <nav
      id="sidenav-1"
      className="fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-neutral-800 xl:data-[te-sidenav-hidden='false']:translate-x-0"
      data-te-sidenav-init
      data-te-sidenav-hidden="false"
      data-te-sidenav-mode-breakpoint-over="0"
      data-te-sidenav-mode-breakpoint-side="xl"
      data-te-sidenav-content="#content"
      data-te-sidenav-accordion="true"
    >
      <a
        className="mb-3 flex items-center justify-center py-6 outline-none"
        href="#"
        data-te-ripple-init
        data-te-ripple-color="sky"
      >
        <img
          id="te-logo"
          className="mr-2 w-8"
          src="https://tailwind-elements.com/img/logo.png"
          alt="TE Logo"
          draggable="false"
        />
        <span className="uppercase text-white font-medium">{props.user.name}</span>
      </a>

      <ul className="relative m-0 list-none px-4" data-te-sidenav-menu-ref>
        {links.map((link, i) => (
          <li
            key={i}
            className={`relative tracking-wider font-normal ${
              location === link.url ? ' text-emerald-500 font-semibold' : ' text-neutral-500'
            }`}
          >
            <a
              className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] outline-none transition duration-300 ease-linear hover:text-white hover:outline-none focus:text-white focus:outline-none active:text-white active:outline-none data-[te-sidenav-state-active]:text-white data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none hover:bg-white/5 focus:bg-white/5 active:bg-white/5"
              href={link.url as string}
              data-te-sidenav-link-ref
            >
              <span
                className={`mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-white group-focus:[&>svg]:fill-white group-active:[&>svg]:fill-white group-[te-sidenav-state-active]:[&>svg]:fill-white motion-reduce:[&>svg]:transition-none ${
                  location === link.url
                    ? ' [&>svg]:fill-emerald-500'
                    : ' [&>svg]:fill-neutral-500'
                }`}
              >
                {link.icon}
              </span>
              <span>{link.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
