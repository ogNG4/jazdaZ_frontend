import {createSlice} from '@reduxjs/toolkit';
import {IAuthState} from 'redux/types/auth';
import {decodeToken} from 'utils/token';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
    accessToken: '',
    userData: {
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      phoneNumber: '',
    },
  } as IAuthState,

  reducers: {
    login: (state, action) => {
      const decodedToken = decodeToken(action.payload);
      state.userData.role = decodedToken.role;
      state.userData.firstName = decodedToken.user.firstName;
      state.userData.lastName = decodedToken.user.lastName;
      state.userData.email = decodedToken.user.email;
      state.userData.phoneNumber = decodedToken.user.phoneNumber;
      state.isLogged = true;
      state.accessToken = action.payload;
    },
    logout: state => {
      state.userData = {
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        phoneNumber: '',
      };
      state.isLogged = false;
      state.accessToken = '';
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
