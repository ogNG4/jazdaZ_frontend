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

export interface CreateUserResponse {
  id: string;
  firstName: string;
  lastName: string;
  userType: string;
  email: string;
  phone: string;
}

const createUser = async ({firstName, lastName, userType, email, phone, password}: CreateUser) => {
  const {data} = await instance.post('users', {
    firstName,
    lastName,
    userType,
    email,
    phone,
    password,
  });

  return data;
};

const useCreateUserMutation = (
  options: UseMutationOptions<CreateUserResponse, AxiosError, CreateUser> = {},
) => {
  return useMutation<CreateUserResponse, AxiosError, CreateUser>({
    mutationFn: createUserData => createUser(createUserData),
    ...options,
  });
};

export default useCreateUserMutation;
