import {UseMutationOptions, useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import instance from 'services/api/axios-instance';

export interface DeleteVehicle {
  id: string;
}

const deleteVehicle = async ({id}: DeleteVehicle) => {
  const {data} = await instance.delete(`vehicles/${id}`);

  return data;
};

const useDeleteVehicleMutation = (
  options: UseMutationOptions<void, AxiosError, DeleteVehicle> = {},
) => {
  return useMutation<void, AxiosError, DeleteVehicle>({
    mutationFn: deleteVehicleData => deleteVehicle(deleteVehicleData),
    ...options,
  });
};

export default useDeleteVehicleMutation;
