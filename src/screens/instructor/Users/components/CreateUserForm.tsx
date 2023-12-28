import {Form} from 'tamagui';
import {SimpleForm, InputWithHeader, SelectWithHeader} from 'components/Form';
import SolidButton from 'components/Button/SolidButton';
import * as yup from 'yup';
import React, {useCallback} from 'react';
import {showToast} from 'utils/toast';
import {Role} from 'types/role.enum';
import {useCreateUserMutation} from 'hooks/mutations';
import {useForm} from 'react-hook-form';
import {usePermissions} from 'hooks';

interface FormInput {
  firstName: string;
  lastName: string;
  userType: string;
  email: string;
  phone: string;
  password: string;
}

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('Imię jest wymagane')
    .min(3, 'Imię musi mieć minimum 3 znaki')
    .max(15, 'Imię może mieć maksymalnie 15 znaków'),
  lastName: yup
    .string()
    .required('Nazwisko jest wymagane')
    .min(3, 'Nazwisko musi mieć minimum 3 znaki')
    .max(20, 'Nazwisko może mieć maksymalnie 15 znaków'),
  userType: yup.string().required('Rola jest wymagana'),
  email: yup
    .string()
    .required('Email jest wymagany')
    .email('Email jest niepoprawny')
    .max(50, 'Email może mieć maksymalnie 50 znaków'),
  password: yup.string().required('Hasło jest wymagane'),
  repeatPassword: yup.string().oneOf([yup.ref('password'), null], 'Hasła muszą być takie same'),
  phone: yup
    .string()
    .required('Numer telefonu jest wymagany')
    .min(9, 'Numer telefonu jest niepoprawny'),
});

const CreateUserForm: React.FC = () => {
  const {mutate, isPending} = useCreateUserMutation();
  const {hasPermissions: isSuperAdmin} = usePermissions([Role.SUPER_ADMIN], 'AND');

  const handleSubmit = useCallback(
    ({firstName, lastName, userType, email, phone, password}: FormInput) => {
      mutate(
        {firstName, lastName, userType, email, phone, password},
        {
          onSuccess: data => {
            showToast('success', 'Pomyślnie utworzono użytkownika');
          },
          onError: error => {
            showToast('error', error?.response?.data as string);
          },
        },
      );

      console.log('firstName', firstName);
      console.log('lastName', lastName);
      console.log('userType', userType);
    },
    [],
  );

  const selectItems = [
    {label: 'Instruktor', value: Role.ADMIN},
    {label: 'Kursant', value: Role.USER},
  ];

  const superAdminSelectItems = [{label: 'Super admin', value: Role.SUPER_ADMIN}, ...selectItems];

  const defaultValues = {
    firstName: '',
    lastName: '',
    userType: '',
    email: '',
    phone: '',
    password: '',
  };

  return (
    <SimpleForm
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      defaultValues={defaultValues}>
      <InputWithHeader name="firstName" placeholder="Podaj imię" label="Imię" />
      <InputWithHeader name="lastName" placeholder="Podaj nazwisko" label="Nazwisko" />
      <SelectWithHeader
        label={'Rola'}
        placeholder="Role"
        name="userType"
        items={isSuperAdmin ? superAdminSelectItems : selectItems}
      />
      <InputWithHeader name="email" placeholder="Podaj swój email" label="Email" />
      <InputWithHeader
        name="phone"
        placeholder="Podaj swój numer telefonu"
        label="Numer telefonu"
      />
      <InputWithHeader
        name="password"
        type="password"
        placeholder="Podaj swoje hasło"
        label="Hasło"
      />
      <InputWithHeader
        name="repeatPassword"
        type="password"
        placeholder="Podaj swoje hasło"
        label="Powtórz hasło"
      />
      <Form.Trigger asChild>
        <SolidButton
          bg={'$colors.darkPurple'}
          pressedBg={'$colors.lightPurple'}
          label="Zaloguj się"
          isLoading={isPending}
        />
      </Form.Trigger>
    </SimpleForm>
  );
};

export default CreateUserForm;
