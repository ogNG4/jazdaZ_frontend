import {UseMutationOptions, useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import instance from 'services/api/axios-instance';

export interface CreateCategory {
  drivingLicenceCategory: string;
  name: string;
}

export interface CreateCategoryResponse {
  id: string;
  drivingLicenceCategory: string;
  name: string;
}

const createCategory = async ({drivingLicenceCategory, name}: CreateCategory) => {
  const {data} = await instance.post('coursesCategories', {
    drivingLicenceCategory,
    name,
  });

  return data;
};

const useCreateCategoryMutation = (
  options: UseMutationOptions<CreateCategoryResponse, AxiosError, CreateCategory> = {},
) => {
  return useMutation<CreateCategoryResponse, AxiosError, CreateCategory>({
    mutationFn: createCategoryData => createCategory(createCategoryData),
    ...options,
  });
};

export default useCreateCategoryMutation;
