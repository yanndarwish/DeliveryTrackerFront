// react router, redux, react
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'renderer/redux/hooks';
import { useEffect } from 'react';
// components
import Sidebar from 'renderer/components/Sidebar';
import Navbar from 'renderer/components/Navbar';

const Root = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);

  console.log(user);

  useEffect(() => {
    !user._id && navigate('/login');
  }, [user]);

  return (
    user && (
      <div className="h-screen bg-neutral-900 [&>*]:leading-[1.6]">
        {/* Navbar */}
        <header>
          <Navbar />
          <Sidebar user={user} />
        </header>
        {/* Content */}
        <main id="content">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
    )
  );
};

export default Root;
