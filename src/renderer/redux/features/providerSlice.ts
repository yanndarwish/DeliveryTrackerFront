import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { providersApi } from '../services/providers';
import { Provider } from 'renderer/interfaces';

export interface ProviderState {
  providers: Provider[];
}

const initialState: ProviderState = {
  providers: [],
};

export const providerSlice = createSlice({
  name: 'provider',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      providersApi.endpoints.getProviders.matchFulfilled,
      (state, action: PayloadAction<ProviderState>) => {
        state.providers = action.payload.providers;
      }
    );
  },
});

export default providerSlice.reducer;
