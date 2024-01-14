import CardWrapper from 'components/Card/CardWrapper';
import {Vehicle, vehiclesQueryKey} from 'hooks/queries/useVehiclesQuery';
import {memo} from 'react';
import {Button, Text, XStack, YStack} from 'tamagui';
import {Trash2Icon, Pencil} from 'lucide-react-native';
import {useDeleteVehicleMutation} from 'hooks/mutations';
import {showToast} from 'utils/toast';
import {useQueryClient} from '@tanstack/react-query';
import useInstructorNavigation from 'navigation/hooks/useInstructorNavigation';
import {Paragraph} from 'components/Typography';
import {useCategoryQuery} from 'hooks/queries';

const VehicleCard = ({car}: {car: Vehicle}) => {
  const {mutate} = useDeleteVehicleMutation();
  const {data} = useCategoryQuery({id: car.courseCategory.id});
  const client = useQueryClient();
  const navigation = useInstructorNavigation();

  const handleDelete = (id: string) => {
    mutate(
      {
        id,
      },
      {
        onSuccess: () => {
          showToast('success', 'Pomyślnie usunięto pojazd');
          client.invalidateQueries({queryKey: vehiclesQueryKey});
        },
        onError: error => {
          showToast('error', error?.response?.data as string);
        },
      },
    );
  };

  const CardItem = ({label, value}: {label: string; value: string}) => {
    return (
      <XStack>
        <Paragraph bold={true}>{label}: </Paragraph>
        <Paragraph>{value}</Paragraph>
      </XStack>
    );
  };

  return (
    <CardWrapper px={'$3'}>
      <XStack justifyContent="space-between">
        <YStack>
          <CardItem label="Marka" value={car.brand} />
          <CardItem label="Model" value={car.model} />
          <CardItem label="Rok produkcji" value={car.year.toString()} />
          <CardItem label="Kolor" value={car.color} />
          <CardItem label="Numer rejestracyjny" value={car.registrationNumber} />
          <CardItem label="Kategoria" value={data?.drivingLicenceCategory || ''} />
        </YStack>
        <YStack justifyContent="space-evenly">
          <Button size={'$3'} variant="outlined" onPress={() => handleDelete(car.id)}>
            <Trash2Icon size={24} color="black" />
          </Button>
          <Button
            size={'$3'}
            variant="outlined"
            onPress={() => {
              navigation.navigate('EditVehicle', {car});
            }}>
            <Pencil size={24} color="black" />
          </Button>
        </YStack>
      </XStack>
    </CardWrapper>
  );
};

export default memo(VehicleCard);
