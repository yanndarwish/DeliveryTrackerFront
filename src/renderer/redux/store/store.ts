import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// reducer
import rootReducer from '../reducer/rootReducer';
// services
import { usersApi } from '../services/users';
import { driversApi } from '../services/drivers';
import { clientsApi } from '../services/clients';
import { vehiclesApi } from '../services/vehicles';
import { providersApi } from '../services/providers';
import { deliveriesApi } from '../services/deliveries';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      driversApi.middleware,
      clientsApi.middleware,
      vehiclesApi.middleware,
      providersApi.middleware,
      deliveriesApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
