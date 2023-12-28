// Custom hook
import {useSelector} from 'react-redux';

const useAuthToken = () => {
  return useSelector((state: any) => state.auth.accessToken);
};

export default useAuthToken;
