import {UseMutationOptions, useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {Category} from 'hooks/queries/useCategoriesQuery';
import instance from 'services/api/axios-instance';

export interface CreateCourse {
  name: string;
  startDate: string;
  courseCategory: Category;
  usersIds?: string[];
  instructor?: string;
  student?: string;
}

export interface CreateCourseResponse {
  id: string;
  drivingLicenceCategory: string;
  name: string;
}

const createCourse = async ({name, startDate, courseCategory, usersIds}: CreateCourse) => {
  const {data} = await instance.post('courses', {
    name,
    status: 'TRWAJĄCY',
    startDate,
    courseCategoryId: courseCategory,
    usersIds,
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
