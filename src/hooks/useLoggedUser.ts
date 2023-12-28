import {useSelector} from 'react-redux';

const useLoggedUser = () => {
  const user = useSelector((state: any) => state.auth.userData);

  return {user};
};

export default useLoggedUser;
