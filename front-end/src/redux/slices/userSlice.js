import { createSlice } from '@reduxjs/toolkit';

const setLocalStorage = (user) => {
  // user: {
  //   name: string,
  //   email: string,
  //   token: string,
  //   role: string,
  // }
  localStorage.setItem('user', JSON.stringify(user));
};

const initialState = {
  id: 0,
  name: '',
  email: '',
  role: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      // action.payload: {
      //   id: number,
      //   name: string,
      //   email: string,
      //   token: string,
      //   role: string,
      // }
      setLocalStorage(action.payload);
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.token = action.payload.token;
    },
    setToken: (state, action) => {
      // action.payload: string
      state.token = action.payload;
    },
    logout: (state) => {
      state.id = '';
      state.name = '';
      state.email = '';
      state.role = '';
      state.token = '';
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
