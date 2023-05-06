import { createHashRouter } from 'react-router-dom';
import Login from 'renderer/pages/Login';
import Root from './Root';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: 'team',
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
