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
      //   id: number,
      //   quantity: number,
      // }
      const { id, quantity } = action.payload;
      const index = state.items.findIndex((e) => e.id === id);
      if (index < 0) return;
      state.items[index].quantity = quantity;
    },
    addOrUpdateItem: (state, action) => {
      // action.payload: {
      //   id: number,
      //   name: string,
      //   price: number,
      //   quantity: number
      // }
      const { id, quantity } = action.payload;
      const index = state.items.findIndex((e) => e.id === id);
      if (index < 0) {
        state.items.push(action.payload);
      } else {
        state.items[index].quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, changeQuantity, addOrUpdateItem } = cartSlice.actions;

export default cartSlice.reducer;
