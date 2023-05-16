import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import { usersApi } from '../services/users';
import driverReducer from '../features/driverSlice';
import { driversApi } from '../services/drivers';

const rootReducer = combineReducers({
  user: userReducer,
  driver: driverReducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [driversApi.reducerPath]: driversApi.reducer,
});

export default rootReducer;
