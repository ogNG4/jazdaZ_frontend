import React, {useCallback} from 'react';
import {Stack} from 'tamagui';
import SectionHeader from 'components/Typography/SectionHeader';
import ScrollLayout from 'layouts/ScrollLayout';
import {useCreateVehicleMutation} from 'hooks/mutations';
import VehicleForm from './components/VehicleForm';
import {CreateVehicle} from 'hooks/mutations/useCreateVehicleMutation';
import {useQueryClient} from '@tanstack/react-query';
import {showToast} from 'utils/toast';
import {vehiclesQueryKey} from 'hooks/queries/useVehiclesQuery';

const CreateVehicleScreen: React.FC = () => {
  const {mutate, isPending} = useCreateVehicleMutation();
  const queryClient = useQueryClient();

  const handleSubmit = useCallback(
    ({brand, model, year, color, registrationNumber, courseCategory}: CreateVehicle) => {
      mutate(
        {brand, model, year, color, registrationNumber, courseCategory},
        {
          onSuccess: () => {
            queryClient.invalidateQueries({queryKey: vehiclesQueryKey});
            showToast('success', 'Pomyślnie utworzono pojazd');
          },
          onError: error => {
            showToast('error', error?.response?.data as string);
          },
        },
      );
    },
    [],
  );
  return (
    <ScrollLayout>
      <Stack w={'100%'}>
        <SectionHeader title="Dodaj pojazd" subtitle="Dodaj kursanta lub instruktora" mb={'$4'} />
        <VehicleForm onSubmit={handleSubmit} isLoading={isPending} />
      </Stack>
    </ScrollLayout>
  );
};

export default CreateVehicleScreen;
