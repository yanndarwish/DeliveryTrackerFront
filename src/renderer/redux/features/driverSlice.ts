import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { driversApi } from '../services/drivers';
import { Driver } from 'renderer/interfaces';

export interface DriverState {
  drivers: Driver[];
}

const initialState: DriverState = {
  drivers: [],
};

export const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      driversApi.endpoints.getDrivers.matchFulfilled,
      (state, action: PayloadAction<DriverState>) => {
        state.drivers = action.payload.drivers;
      }
    );
  },
});

export default driverSlice.reducer;
