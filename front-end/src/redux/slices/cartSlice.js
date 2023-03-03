import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // action.payload: {
      //   id: number,
      //   name: string,
      //   price: number,
      //   quantity: number
      // }
      state.items.push({ ...action.payload });
    },
    removeItem: (state, action) => {
      // action.payload = id: number
      state.items = state.items.filter((e) => e.id !== action.payload);
    },
    changeQuantity: (state, action) => {
      // action.payload: {
      //   name: string,
      //   add: boolean,
      //   amount: number,
      // }
      const { id, add, amount } = action.payload;
      const index = state.expenses.findIndex((e) => e.id === id);
      const amountToAdd = add ? amount : (-amount);
      state.items[index].quantity += amountToAdd;
    },
  },
});

export const { addItem, removeItem, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
