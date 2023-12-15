import {UseMutationOptions, useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import instance from 'services/api/axios-instance';

export interface SignIn {
  email: string;
  password: string;
}

export interface SignInResponse {
    headers: any;
}

const signIn = async ({email, password}: SignIn) => {
    const response = await instance.post('login', {
      username: email,
      password,
    });

    return {
      data: response.data,
      headers: response.headers
    };
  };
  

const useLoginMutation = (options: UseMutationOptions<SignInResponse, AxiosError, SignIn> = {}) => {
  return useMutation<SignInResponse, AxiosError, SignIn>({
    mutationFn: signInData => signIn(signInData),
    ...options,
  });
};

export default useLoginMutation;
