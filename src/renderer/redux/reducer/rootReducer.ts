import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import { usersApi } from '../services/users';

const rootReducer = combineReducers({
  user: userReducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

export default rootReducer;