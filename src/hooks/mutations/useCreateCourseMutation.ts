import {UseMutationOptions, useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {Category} from 'hooks/queries/useCategoriesQuery';
import instance from 'services/api/axios-instance';

export interface CreateCourse {
  name: string;
  status: string;
  startDate: string;
  courseCategory: Category;
}

export interface CreateCourseResponse {
  id: string;
  drivingLicenceCategory: string;
  name: string;
}

const createCourse = async ({
  name,
  status = 'PENDING',
  startDate,
  courseCategory,
}: CreateCourse) => {
  const {data} = await instance.post('courses', {
    name,
    status,
    startDate,
    courseCategoryId: courseCategory,
  });

  return data;
};

const useCreateCourseMutation = (
  options: UseMutationOptions<CreateCourseResponse, AxiosError, CreateCourse> = {},
) => {
  return useMutation<CreateCourseResponse, AxiosError, CreateCourse>({
    mutationFn: createCourseData => createCourse(createCourseData),
    ...options,
  });
};

export default useCreateCourseMutation;
