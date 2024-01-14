import {useQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import instance from 'services/api/axios-instance';

export interface Category {
  id: string;
  drivingLicenceCategory: string;
  name: string;
}

export const categoryQueryKey = ['category'];

const getCategory = async (id: string) => {
  const {data} = await instance.get(`coursesCategories/${id}`);
  return data;
};

export default function useCategoryQuery({id}: {id: string}) {
  return useQuery<Category, AxiosError>({
    queryKey: categoryQueryKey,
    queryFn: () => getCategory(id),
  });
}
