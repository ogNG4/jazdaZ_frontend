import {useCallback} from 'react';
import useAsyncStorage from './useAsyncStorage';
import {jwtDecode} from 'jwt-decode';

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

  return {setAccessToken, token, removeAccessToken};
};

export default useToken;
