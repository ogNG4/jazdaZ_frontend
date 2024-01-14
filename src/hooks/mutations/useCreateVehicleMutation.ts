import {UseMutationOptions, useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import { Category } from 'hooks/queries/useCategoriesQuery';
import instance from 'services/api/axios-instance';

export interface CreateVehicle {
  brand: string;
  model: string;
  year: number;
  color: string;
  courseCategory: Category;
  registrationNumber: string;
}

export interface CreateVehicleResponse {
  id: string;
  firstName: string;
  lastName: string;
  userType: string;
  email: string;
  phone: string;
}

const createVehicle = async ({
  brand,
  model,
  year,
  color,
  registrationNumber,
  courseCategory,
}: CreateVehicle) => {
  const {data} = await instance.post('vehicles', {
    brand,
    model,
    year,
    color,
    registrationNumber,
    courseCategoryId: courseCategory,
  });

  return data;
};

const useCreateVehicleMutation = (
  options: UseMutationOptions<CreateVehicleResponse, AxiosError, CreateVehicle> = {},
) => {
  return useMutation<CreateVehicleResponse, AxiosError, CreateVehicle>({
    mutationFn: createUserData => createVehicle(createUserData),
    ...options,
  });
};

export default useCreateVehicleMutation;
