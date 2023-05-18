// react router, redux, react
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'renderer/redux/hooks';
import { useEffect } from 'react';
// components
import Sidebar from 'renderer/components/globals/Sidebar';
import Navbar from 'renderer/components/globals/Navbar';

const Root = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);

  console.log(user);

  useEffect(() => {
    !user._id && navigate('/login');
  }, [user]);

  return (
    user && (
      <div className="h-screen flex flex-col bg-neutral-900 [&>*]:leading-[1.6]">
        {/* Navbar */}
        <header className='h-fit'>
          <Navbar />
          <Sidebar user={user} />
        </header>
        {/* Content */}
        <main id="content" className='h-full'>
            <Outlet />
        </main>
      </div>
    )
  );
};

export default Root;
