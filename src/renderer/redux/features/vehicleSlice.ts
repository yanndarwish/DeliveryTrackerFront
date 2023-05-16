import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { vehiclesApi } from '../services/vehicles';
import { Vehicle } from 'renderer/interfaces';

export interface VehicleState {
  vehicles: Vehicle[];
}

const initialState: VehicleState = {
  vehicles: [],
};

export const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      vehiclesApi.endpoints.getVehicles.matchFulfilled,
      (state, action: PayloadAction<VehicleState>) => {
        state.vehicles = action.payload.vehicles;
      }
    );
  },
});

export default vehicleSlice.reducer;
