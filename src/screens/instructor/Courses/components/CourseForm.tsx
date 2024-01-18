import React, {useState} from 'react';
import {Button, Form, Stack, Text} from 'tamagui';
import {SimpleForm, InputWithHeader, SelectWithHeader} from 'components/Form';
import SolidButton from 'components/Button/SolidButton';
import * as yup from 'yup';
import {useCategoriesQuery} from 'hooks/queries';
import {CreateVehicle} from 'hooks/mutations/useCreateVehicleMutation';
import {EditVehicle} from 'hooks/mutations/useEditVehicleMutation';
import useCreateCourseMutation from 'hooks/mutations/useCreateCourseMutation';
import DatePicker from 'react-native-date-picker';
import {Pressable} from 'react-native';

const validationSchema = yup.object().shape({
  name: yup.string().required('Nazwajest wymagana'),
  status: yup.string().required('Status jest wymagany'),
  startDate: yup.string().required('Data rozpoczęcia jest wymagana'),
  courseCategory: yup.string().required('Kategoria jest wymagana'),
});

interface CourseFormProps {
  onSubmit: (vehicle: EditVehicle) => void;
  vehicle?: CreateVehicle;
  isLoading?: boolean;
}

const CourseForm = ({onSubmit, isLoading}: CourseFormProps) => {
  const {data} = useCategoriesQuery();
  const {mutate} = useCreateCourseMutation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const defaultValues = {
    name: '',
    startDate: date.toISOString().split('T')[0],
    courseCategory: '',
  };

  const selectItems = data
    ? data?.map(item => ({
        label: item.drivingLicenceCategory,
        value: item.id,
      }))
    : [];

  return (
    <>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setDate(date);
        }}
      />
      <SimpleForm
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        defaultValues={defaultValues}>
        <InputWithHeader name="name" placeholder="Podaj nazwę" label="Nazwa" />
        <InputWithHeader name="status" placeholder="Podaj status" label="Status" />
        <Pressable onPress={() => setOpen(!open)}>
          <Stack pointerEvents="none">
            <InputWithHeader
              name="startDate"
              placeholder="Podaj datę rozpoczęcia"
              label="Data rozpoczęcia"
            />
          </Stack>
        </Pressable>
        <SelectWithHeader
          label={'Kategoria'}
          name="courseCategory"
          placeholder="Wybierz kategorię"
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
    </>
  );
};

export default CourseForm;
