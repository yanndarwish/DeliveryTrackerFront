import { createHashRouter } from 'react-router-dom';
import Root from './Root';
// pages
import Login from 'renderer/pages/Login';
import Home from 'renderer/pages/Home';
import Deliveries from 'renderer/pages/Deliveries';
import Clients from 'renderer/pages/Clients';
import Provider from 'renderer/pages/Provider';
import Vehicles from 'renderer/pages/Vehicles';
import Drivers from 'renderer/pages/Drivers';
import Groups from 'renderer/pages/Groups';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    // loader: rootLoader,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'clients',

        element: <Clients />,
      },
      {
        path: 'providers',
        element: <Provider />,
      },
      {
        path: 'deliveries',
        element: <Deliveries />,
      },
      {
        path: 'vehicles',
        element: <Vehicles />,
      },
      {
        path: 'drivers',
        element: <Drivers />,
      },
      {
        path: 'groups',
        element: <Groups />,
      },
    ],
  },

  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
