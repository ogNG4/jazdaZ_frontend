import {createSlice, isDraft} from '@reduxjs/toolkit';
import {IAuthState} from 'redux/types/auth';
import {decodeToken} from 'utils/token';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
    accessToken: '',
    userData: {
      id: '',
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
      state.userData.id = decodedToken.user.id;
      state.userData.role = decodedToken.role;
      state.userData.firstName = decodedToken.user.firstName;
      state.userData.lastName = decodedToken.user.lastName;
      state.userData.email = decodedToken.user.email;
      state.userData.phoneNumber = decodedToken.user.phone;
      state.isLogged = true;
      state.accessToken = action.payload;
    },
    logout: state => {
      state.userData = {
        id: '',
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
