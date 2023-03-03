import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserName: (state, action) => {
      // action.payload: string
      state.name = action.payload;
    },
    setToken: (state, action) => {
      // action.payload: string
      state.token = action.payload;
    },
  },
});

export const { updateUserName } = userSlice.actions;

export default userSlice.reducer;
