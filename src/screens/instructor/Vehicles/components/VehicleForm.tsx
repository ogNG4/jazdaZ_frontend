import React from 'react';
import {Form} from 'tamagui';
import {SimpleForm, InputWithHeader, SelectWithHeader} from 'components/Form';
import SolidButton from 'components/Button/SolidButton';
import * as yup from 'yup';
import {useCategoriesQuery} from 'hooks/queries';
import {CreateVehicle} from 'hooks/mutations/useCreateVehicleMutation';
import { EditVehicle } from 'hooks/mutations/useEditVehicleMutation';

const validationSchema = yup.object().shape({
  brand: yup.string().required('Marka jest wymagana'),
  model: yup.string().required('Model jest wymagany'),
  year: yup.number().required('Rocznik jest wymagany'),
  color: yup.string().required('Kolor jest wymagany'),
  courseCategory: yup.string().required('Kategoria jest wymagana'),
  registrationNumber: yup.string().required('Numer rejestracyjny jest wymagany'),
});

interface VehicleFormProps {
  onSubmit: (vehicle: EditVehicle) => void;
  vehicle?: CreateVehicle;
  isLoading?: boolean;
}

const VehicleForm = ({onSubmit, vehicle, isLoading}: VehicleFormProps) => {
  const {data} = useCategoriesQuery();

  const selectItems = data
    ? data?.map(item => ({
        label: item.drivingLicenceCategory,
        value: item.id,
      }))
    : [];

  const defaultValues = {
    brand: vehicle?.brand || '',
    model: vehicle?.model || '',
    year: vehicle?.year.toString() || 0,
    color: vehicle?.color || '',
    registrationNumber: vehicle?.registrationNumber || '',
    courseCategory: vehicle?.courseCategory.id || '',
  };

  return (
    <SimpleForm
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      defaultValues={defaultValues}>
      <InputWithHeader name="brand" placeholder="Podaj markę" label="Marka" />
      <InputWithHeader name="model" placeholder="Podaj model" label="Model" />
      <InputWithHeader name="year" placeholder="Podaj rok produkcji" label="Rocznik" />
      <InputWithHeader name="color" placeholder="Podaj kolor" label="Kolor" />
      <InputWithHeader
        name="registrationNumber"
        placeholder="Podaj numer rejestracyjny"
        label="Numer rejestracyjny"
      />

      <SelectWithHeader
        label={'Kategoria'}
        placeholder="Wybierz kategorię"
        name="courseCategory"
        items={selectItems}
      />
      <Form.Trigger asChild>
        <SolidButton
          bg={'$colors.darkPurple'}
          pressedBg={'$colors.lightPurple'}
          label="Dodaj"
          isLoading={isLoading}
        />
      </Form.Trigger>
    </SimpleForm>
  );
};

export default VehicleForm;
