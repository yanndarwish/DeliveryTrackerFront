// react router, redux, react
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// components
import Sidebar from 'renderer/components/Sidebar';
import Navbar from 'renderer/components/Navbar';
// import CreateJob from 'renderer/components/CreateJob';
// icons
// import { MdAdd } from 'react-icons/md';

const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();

  //   const isLoggedIn = useSelector((state: any) => state.authSlice.loggedIn);
  //   const name = useSelector((state: any) => state.authSlice.name);
  const json = localStorage.getItem('user');
  const user = json && JSON.parse(json);

  console.log(user);

  useEffect(() => {
    !user && navigate('/login');
  }, [user]);

  return (
    user && (
      <div className="h-screen bg-slate-900 [&>*]:leading-[1.6]">
        {/* Navbar */}
        <header>
          <Sidebar user={user}/>
          <Navbar />
        </header>
        {/* Content */}
        <main>
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
    )
  );
};

export default Root;
