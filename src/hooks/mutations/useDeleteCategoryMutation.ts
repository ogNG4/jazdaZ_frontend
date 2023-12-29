import {UseMutationOptions, useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import instance from 'services/api/axios-instance';

export interface DeleteCategory {
  id: string;
}

const deleteCategory = async ({id}: DeleteCategory) => {
  const {data} = await instance.delete(`coursesCategories/${id}`);

  return data;
};

const useDeleteCategoryMutation = (
  options: UseMutationOptions<void, AxiosError, DeleteCategory> = {},
) => {
  return useMutation<void, AxiosError, DeleteCategory>({
    mutationFn: deleteCategoryData => deleteCategory(deleteCategoryData),
    ...options,
  });
};

export default useDeleteCategoryMutation;
