import {useQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import instance from 'services/api/axios-instance';

export interface Category {
  id: string;
  drivingLicenceCategory: string;
  name: string;
}

export const categoriesQueryKey = ['courses'];

const getCategories = async () => {
  const {data} = await instance.get('courses');
  return data;
};

export default function useCoursesQuery() {
  return useQuery<Category[], AxiosError>({
    queryKey: categoriesQueryKey,
    queryFn: getCategories,
  });
}
