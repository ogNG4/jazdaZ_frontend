import {useCallback} from 'react';
import useAsyncStorage from './useAsyncStorage';
import {jwtDecode} from 'jwt-decode';
import { decodeToken } from 'utils/token';

const useToken = () => {
  const [token, setToken, removeToken] = useAsyncStorage('token', '');

  const setAccessToken = useCallback(
    (token: string) => {
      setToken(token);
    },
    [setToken],
  );

  const removeAccessToken = useCallback(() => {
    removeToken();
  }, [removeToken]);

  const decodedToken = decodeToken(token);

  return {setAccessToken, token, removeAccessToken, decodedToken};
};

export default useToken;
