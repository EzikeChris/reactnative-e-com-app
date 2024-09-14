import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  auth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleAuth(state) {
      state.auth = !state.auth;
    },
  },
});

export const {toggleAuth} = authSlice.actions;
export default authSlice.reducer;
