// react router, redux, react
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'renderer/redux/hooks';
import { useEffect } from 'react';
import { IoMdMenu } from 'react-icons/io';

import { links } from 'renderer/sidebarLinks';

const Root = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    !user._id && navigate('/login');
  }, [user]);

  return (
    user && (
      <div className="h-screen flex flex-col [&>*]:leading-[1.6]">
        {/* Navbar */}
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content p-8">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <IoMdMenu size={24} />
            </label>
            {/* Content */}
            <main id="content" className="h-full">
              <Outlet />
            </main>
          </div>
          <div className="drawer-side z-[-1]">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 lg:bg-base-200/20 text-base-content">
              {links.map((link, i) => (
                <li
                  key={i}
                  className={`relative tracking-wider font-normal ${
                    location === link.url
                      ? ' text-primary-500 font-semibold border-l-2 border-primary-500'
                      : ' text-neutral-500'
                  }`}
                >
                  <Link
                    className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] hover:text-neutral focus:text-neutral active:text-neutral"
                    to={link.url as string}
                    data-te-sidenav-link-ref
                  >
                    <span
                      className={`mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 group-hover:[&>svg]:fill-neutral group-focus:[&>svg]:fill-neutral group-active:[&>svg]:fill-neutral  ${
                        location === link.url
                          ? ' [&>svg]:fill-primary-500'
                          : ' [&>svg]:fill-neutral-500'
                      }`}
                    >
                      {link.icon}
                    </span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default Root;
