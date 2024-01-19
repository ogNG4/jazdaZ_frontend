import axios, {AxiosHeaderValue} from 'axios';
import {useToken} from 'hooks';
import env from 'react-native-config';
import {store} from 'redux/store';

const API_URL = env.BASE_API_URL;
console.log('API_URL', API_URL);

// const getHeaders = () => {
//   const {token} = useToken();
//   if (token) {
//     return {
//       Authorization: `Bearer ${token}`,
//     };
//   }

//   return {};
// };

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    // ...getHeaders(),
  },
});

export default instance;
