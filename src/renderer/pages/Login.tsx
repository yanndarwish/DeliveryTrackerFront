import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'renderer/redux/hooks';
import { User } from 'renderer/interfaces';
import { IoMdAdd } from 'react-icons/io';
import { setUser } from 'renderer/redux/features/userSlice';
// import { useGetUsersQuery } from 'renderer/redux/services/users';
import { users } from 'renderer/mock';
import SidePanel from 'renderer/components/globals/SidePanel';
import CreateUser from 'renderer/components/CreateUserForm';
import { useState } from 'react';

const Login = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const { data, error, isLoading } = useGetUsersQuery(null);

  const handleClick = (user: User) => {
    dispatch(setUser({ user: user }));
    navigate('/');
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-16 bg-base-100">
      <h1 className="h1 text-center">
        Choisissez un utilisateur
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        {users?.map((user, i) => (
          <button
            key={i}
            className="btn btn-wide btn-lg"
            onClick={() => handleClick(user)}
          >
            <h5 className="text-xl font-semibold leading-6 uppercase text-center">
              {user.name}
            </h5>
          </button>
        ))}
      </div>
      <button
        className="btn btn-circle"
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
