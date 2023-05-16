import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { deliveriesApi } from '../services/deliveries';
import { Delivery } from 'renderer/interfaces';

export interface DeliveryState {
  deliveries: Delivery[];
}

const initialState: DeliveryState = {
  deliveries: [],
};

export const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      deliveriesApi.endpoints.getDeliveries.matchFulfilled,
      (state, action: PayloadAction<DeliveryState>) => {
        state.deliveries = action.payload.deliveries;
      }
    );
  },
});

export default deliverySlice.reducer;
