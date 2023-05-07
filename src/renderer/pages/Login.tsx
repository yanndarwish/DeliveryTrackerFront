import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'renderer/redux/hooks';
import { User } from 'renderer/interfaces';
import { IoMdAdd } from 'react-icons/io';
import { setUser } from 'renderer/redux/features/userSlice';
import {
  useGetUsersQuery,
} from 'renderer/redux/services/users';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetUsersQuery(null);

  console.log(data);

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
          <div
            key={i}
            className="group relative cursor-pointer duration-300 flex items-center justify-center rounded-xl p-6 bg-neutral-800 border border-black/5 highlight-white/5 hover:bg-neutral-700/50 w-40 h-40"
            onClick={() => handleClick(user)}
          >
            <h5 className="text-xl font-semibold leading-6 text-neutral-300 group-hover:text-emerald-500 uppercase text-center">
              {user.name}
            </h5>
          </div>
        ))}
      </div>
      <div className="group relative cursor-pointer duration-300 rounded-full p-6 border border-black/5 highlight-white/5 bg-neutral-800/50 hover:bg-neutral-700/50">
        <h5 className="text-xl font-semibold text-neutral-300 group-hover:text-emerald-500">
          <IoMdAdd />
        </h5>
      </div>
    </div>
  );
};

export default Login;
