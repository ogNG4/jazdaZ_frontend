import {Route, RouteProp} from '@react-navigation/native';
import SectionHeader from 'components/Typography/SectionHeader';
import {Vehicle, vehiclesQueryKey} from 'hooks/queries/useVehiclesQuery';
import ScrollLayout from 'layouts/ScrollLayout';
import {InstructorParamList} from 'navigation/types/router';
import {Text} from 'tamagui';
import VehicleForm from './components/VehicleForm';
import {useEditVehicleMutation} from 'hooks/mutations';
import {useCallback} from 'react';
import {EditVehicle} from 'hooks/mutations/useEditVehicleMutation';
import {showToast} from 'utils/toast';
import {useQueryClient} from '@tanstack/react-query';

interface EditVehicleScreenProps {
  route: RouteProp<InstructorParamList, 'EditVehicle'>;
}

const EditVehicleScreen: React.FC<EditVehicleScreenProps> = ({route}) => {
  const {car} = route.params;
  const {mutate} = useEditVehicleMutation();
  const queryClient = useQueryClient();

  const handleSubmit = useCallback(
    ({id = car.id, brand, model, year, color, registrationNumber, courseCategory}: EditVehicle) => {
      mutate(
        {id, brand, model, year, color, registrationNumber, courseCategory},
        {
          onSuccess: () => {
            queryClient.invalidateQueries({queryKey: vehiclesQueryKey});
            showToast('success', 'Pomyślnie zaktualizowano pojazd');
          },
          onError: error => {
            showToast('error', error?.response?.data as string);
          },
        },
      );
    },
    [car.id, mutate, queryClient],
  );

  return (
    <ScrollLayout>
      <SectionHeader
        title="Edytuj pojazd"
        subtitle={`Edytuj pojazd ${car.brand} ${car.model}`}
        mb={'$4'}
      />
      <VehicleForm key={car.id} vehicle={car} onSubmit={handleSubmit} />
    </ScrollLayout>
  );
};

export default EditVehicleScreen;
