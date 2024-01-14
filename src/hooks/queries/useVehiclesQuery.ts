import {useQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import instance from 'services/api/axios-instance';
import {Category} from './useCategoriesQuery';

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  registrationNumber: string;
  courseCategory: Category;
}

export const vehiclesQueryKey = ['vehicles'];

const getVehicles = async () => {
  const {data} = await instance.get('vehicles');
  return data;
};

export default function useVehiclesQuery() {
  return useQuery<Vehicle[], AxiosError>({
    queryKey: vehiclesQueryKey,
    queryFn: getVehicles,
  });
}
