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
      //   name: string,
      //   price: number,
      // }
      state.items.push({ ...action.payload, quantity: 1 });
    },
    removeItem: (state, action) => {
      // action.payload: {
      //   name: string
      // }
      state.items = state.items.filter((e) => e.name !== action.payload);
    },
    changeQuantity: (state, action) => {
      // action.payload: {
      //   name: string,
      //   add: boolean,
      //   amount: number,
      // }
      const { name, add, amount } = action.payload;
      const index = state.expenses.findIndex((e) => e.name === name);
      const amountToAdd = add ? amount : (-amount);
      state.items[index].quantity += amountToAdd;
    },
  },
});

export const { addItem, removeItem, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
