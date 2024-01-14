import {UseMutationOptions, useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {Category} from 'hooks/queries/useCategoriesQuery';
import instance from 'services/api/axios-instance';

export interface EditVehicle {
  id?: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  courseCategory: Category;
  registrationNumber: string;
}

export interface EditVehicleResponse {
  id: string;
  firstName: string;
  lastName: string;
  userType: string;
  email: string;
  phone: string;
}

const editVehicle = async ({
  id,
  brand,
  model,
  year,
  color,
  registrationNumber,
  courseCategory,
}: EditVehicle) => {
  const {data} = await instance.put(`vehicles/${id}`, {
    brand,
    model,
    year,
    color,
    registrationNumber,
    courseCategoryId: courseCategory,
  });

  return data;
};

const useEditVehicleMutation = (
  options: UseMutationOptions<EditVehicleResponse, AxiosError, EditVehicle> = {},
) => {
  return useMutation<EditVehicleResponse, AxiosError, EditVehicle>({
    mutationFn: createUserData => editVehicle(createUserData),
    ...options,
  });
};

export default useEditVehicleMutation;
