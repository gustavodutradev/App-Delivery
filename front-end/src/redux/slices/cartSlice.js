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
      //   quantity: number,
      //   urlImage: string,
      // }
      const { id } = action.payload;
      const index = state.items.findIndex((e) => e.id === id);
      if (index >= 0) return;
      const item = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity,
        urlImage: action.payload.urlImage,
      };
      state.items.push(item);
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
  },
});

export const { addItem, removeItem, changeQuantity, addOrUpdateItem } = cartSlice.actions;

export default cartSlice.reducer;
