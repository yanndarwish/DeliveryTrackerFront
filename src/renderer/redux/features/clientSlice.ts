import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { clientsApi } from '../services/clients';
import { Client } from 'renderer/interfaces';

export interface ClientState {
  clients: Client[];
}

const initialState: ClientState = {
  clients: [],
};

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      clientsApi.endpoints.getClients.matchFulfilled,
      (state, action: PayloadAction<ClientState>) => {
        state.clients = action.payload.clients;
      }
    );
  },
});

export default clientSlice.reducer;
