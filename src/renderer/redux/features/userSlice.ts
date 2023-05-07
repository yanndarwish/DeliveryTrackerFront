import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from 'renderer/interfaces';

export interface UserState {
  user: User;
}

const initialState: UserState = {
  user: { _id: '', name: '', __v: 0 },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
