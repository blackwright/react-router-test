import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
  token: string;
};

const initialState: SliceState = {
  token: ''
};

export const userSlice = createSlice({
  name: 'user',
  reducers: {
    login: (state) => {
      state.token = 'token';
    },
    logout: (state) => {
      state.token = '';
    }
  },
  initialState
});
