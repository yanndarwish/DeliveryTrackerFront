import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'renderer/redux/hooks';
import { User } from 'renderer/interfaces';
import { IoMdAdd } from 'react-icons/io';
import { setUser } from 'renderer/redux/features/userSlice';
import { useGetUsersQuery } from 'renderer/redux/services/users';
import SidePanel from 'renderer/components/globals/SidePanel';
import CreateUser from 'renderer/components/CreateUserForm';
import { useState } from 'react';

const Login = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetUsersQuery(null);

  const handleClick = (user: User) => {
    dispatch(setUser({ user: user }));
    navigate('/');
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-16 bg-neutral-900">
      <h1 className="text-5xl font-medium text-white text-center">
        Choisissez un utilisateur
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        {data?.users?.map((user, i) => (
          <button
            key={i}
            className="cursor-pointer duration-300 flex items-center justify-center rounded-xl p-6 bg-neutral-800 text-neutral-300 border border-black/5 highlight-white/5 hover:bg-neutral-700/50 hover:text-emerald-500 focus:outline-emerald-500 focus:text-emerald-500 w-40 h-40"
            onClick={() => handleClick(user)}
          >
            <h5 className="text-xl font-semibold leading-6 uppercase text-center">
              {user.name}
            </h5>
          </button>
        ))}
      </div>
      <button
        className="p-5 rounded-full text-neutral-400 focus:outline-emerald-500 hover:text-emerald-500 focus:text-emerald-500 bg-neutral-800/50 hover:bg-neutral-700/50 focus:bg-neutral-700/50"
        onClick={() => setOpen(true)}
      >
        <IoMdAdd size={24} />
      </button>
      {open && (
        <SidePanel title="Nouvel Utilisateur" open={open} setOpen={setOpen}>
          <CreateUser setOpen={setOpen} />
        </SidePanel>
      )}
    </div>
  );
};

export default Login;
