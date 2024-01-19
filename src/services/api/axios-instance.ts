import axios from 'axios';

import env from 'react-native-config';

const API_URL = env.BASE_API_URL;

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

export default instance;
