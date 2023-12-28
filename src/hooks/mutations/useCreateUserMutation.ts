import {UseMutationOptions, useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import instance from 'services/api/axios-instance';

export interface CreateUser {
  firstName: string;
  lastName: string;
  userType: string;
  email: string;
  phone: string;
  password: string;
}

export interface SignInResponse {
  headers: any;
}

const createUser = async ({firstName, lastName, userType, email, phone, password}: CreateUser) => {
  const response = await instance.post('users', {
    firstName,
    lastName,
    userType,
    email,
    phone,
    password,
  });

  return {
    data: response.data,
    headers: response.headers,
  };
};

const useCreateUserMutation = (
  options: UseMutationOptions<SignInResponse, AxiosError, CreateUser> = {},
) => {
  return useMutation<SignInResponse, AxiosError, CreateUser>({
    mutationFn: createUserData => createUser(createUserData),
    ...options,
  });
};

export default useCreateUserMutation;
