import {useQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import instance from 'services/api/axios-instance';
import { Category } from './useCategoriesQuery';

export interface Course {
  id: string;
  name: string;
  status: string;
  startDate: string;
  courseCategory: Category;
}

export const categoriesQueryKey = ['courses'];

const getCategories = async () => {
  const {data} = await instance.get('courses');
  return data;
};

export default function useCoursesQuery() {
  return useQuery<Course[], AxiosError>({
    queryKey: categoriesQueryKey,
    queryFn: getCategories,
  });
}
