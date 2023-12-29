import { useQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import instance from 'services/api/axios-instance';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userType: string;
  phoneNumber: string;
}

export const usersQueryKey = 'users';

const getUsers = async () => {
  const {data} = await instance.get('users');
  return data;
};

export default function useUsersQuery() {
  return useQuery<User[], AxiosError>({
    queryKey: [usersQueryKey],
    queryFn: getUsers,
  });
}
