import axios from 'axios';
import env from 'react-native-config';
import {store} from 'redux/store';

const API_URL = env.BASE_API_URL;

const token = store.getState().auth.accessToken!;
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
