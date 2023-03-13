import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
    removeOrder: (state, action) => {
      state.filter((item) => item !== action.payload);
    },
  },
});

export const { addOrder, removeOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
