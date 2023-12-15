import {createSlice} from '@reduxjs/toolkit';
import {IAuthState} from 'redux/types/auth';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
  } as IAuthState,

  reducers: {
    login: state => {
      state.isLogged = true;
    },
    logout: state => {
      state.isLogged = false;
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;