import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import { usersApi } from '../services/users';
import driverReducer from '../features/driverSlice';
import { driversApi } from '../services/drivers';
import clientReducer from '../features/clientSlice';
import { clientsApi } from '../services/clients';
import vehicleReducer from '../features/vehicleSlice';
import { vehiclesApi } from '../services/vehicles';
import providerReducer from '../features/providerSlice';
import { providersApi } from '../services/providers';
import deliveryReducer from '../features/deliverySlice';
import { deliveriesApi } from '../services/deliveries';

const rootReducer = combineReducers({
  user: userReducer,
  driver: driverReducer,
  client: clientReducer,
  vehicle: vehicleReducer,
  provider: providerReducer,
  delivery: deliveryReducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [driversApi.reducerPath]: driversApi.reducer,
  [clientsApi.reducerPath]: clientsApi.reducer,
  [vehiclesApi.reducerPath]: vehiclesApi.reducer,
  [providersApi.reducerPath]: providersApi.reducer,
  [deliveriesApi.reducerPath]: deliveriesApi.reducer,
});

export default rootReducer;
