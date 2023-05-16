import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import { usersApi } from '../services/users';
import driverReducer from '../features/driverSlice';
import { driversApi } from '../services/drivers';
import clientReducer from '../features/clientSlice';
import { clientsApi } from '../services/clients';

const rootReducer = combineReducers({
  user: userReducer,
  driver: driverReducer,
  client: clientReducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [driversApi.reducerPath]: driversApi.reducer,
  [clientsApi.reducerPath]: clientsApi.reducer,
});

export default rootReducer;
