import {Form} from 'tamagui';
import {SimpleForm, InputWithHeader, SelectWithHeader} from 'components/Form';
import SolidButton from 'components/Button/SolidButton';
import * as yup from 'yup';
import React, {useCallback} from 'react';
import {showToast} from 'utils/toast';
import {Role} from 'types/role.enum';
import {useCreateCategoryMutation} from 'hooks/mutations';
import {useQueryClient} from '@tanstack/react-query';
import {categoriesQueryKey} from 'hooks/queries/useCategoriesQuery';
import {CreateCategory} from 'hooks/mutations/useCreateCategoryMutation';

const validationSchema = yup.object().shape({
  drivingLicenceCategory: yup
    .string()
    .required('Symbol jest wymagany')
    .min(1, 'Symbol musi mieć minimum 1 znak')
    .max(5, 'Symbol może mieć maksymalnie 5 znaków'),
  name: yup
    .string()
    .required('Nazwa jest wymagana')
    .min(3, 'Nazwa musi mieć minimum 3 znaki')
    .max(50, 'Nazwa może mieć maksymalnie 50 znaków'),
});

const CreateCategoryForm: React.FC = () => {
  const {mutate, isPending} = useCreateCategoryMutation();
  const client = useQueryClient();

  const handleSubmit = useCallback(({drivingLicenceCategory, name}: CreateCategory) => {
    mutate(
      {drivingLicenceCategory, name},
      {
        onSuccess: () => {
          client.invalidateQueries({queryKey: categoriesQueryKey});
          showToast('success', 'Pomyślnie utworzono kategorię');
        },
        onError: error => {
          showToast('error', error?.response?.data as string);
        },
      },
    );
  }, []);

  const defaultValues = {
    drivingLicenceCategory: '',
    name: '',
  };

  return (
    <SimpleForm
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      defaultValues={defaultValues}>
      <InputWithHeader name="drivingLicenceCategory" placeholder="Podaj symbol" label="Symbol" />
      <InputWithHeader name="name" placeholder="Podaj nazwę" label="Nazwa" />

      <Form.Trigger asChild>
        <SolidButton
          bg={'$colors.darkPurple'}
          pressedBg={'$colors.lightPurple'}
          label="Dodaj"
          isLoading={isPending}
        />
      </Form.Trigger>
    </SimpleForm>
  );
};

export default CreateCategoryForm;
