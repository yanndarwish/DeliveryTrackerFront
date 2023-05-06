import { useNavigate } from 'react-router-dom';
import { User } from 'renderer/interfaces';
import { IoMdAdd } from 'react-icons/io';

const Login = () => {
  const navigate = useNavigate();
  const users: User[] = [
    { name: 'dmt', _id: 'dbfhsqfhbqvrjeq53675' },
    { name: 'geostar', _id: 'dbfhsqfhbqvrjeq5sdf3952' },
  ];

  const handleClick = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/');
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-16 bg-slate-900">
      <h1 className="text-4xl font-medium text-white text-center">
        Choisissez un utilisateur
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        {users.map((user, i) => (
          <div
            key={i}
            className="group relative cursor-pointer duration-300 flex items-center justify-center rounded-3xl p-6 bg-slate-800/80 highlight-white/5 hover:bg-slate-700/50 w-40 h-40"
            onClick={() => handleClick(user)}
          >
            <h5 className="text-xl font-semibold leading-6 text-white group-hover:text-sky-400 uppercase text-center">
              {user.name}
            </h5>
          </div>
        ))}
      </div>
      <div className="group relative cursor-pointer duration-300 rounded-3xl p-6 bg-slate-800/30 highlight-white/5 hover:bg-slate-700/50">
        <h5 className="text-xl font-semibold text-white group-hover:text-sky-400">
          <IoMdAdd />
        </h5>
      </div>
    </div>
  );
};

export default Login;
