import {Form} from 'tamagui';
import SimpleForm from 'components/Form/SimpleForm';
import InputWithHeader from 'components/Form/InputWithHeader';
import SolidButton from 'components/Button/SolidButton';
import * as yup from 'yup';
import React, {useCallback} from 'react';
import useLoginMutation from 'hooks/mutations/useLoginMutation';
import useToken from 'hooks/useToken';
import {useToast} from 'react-native-toast-notifications';
import {customToastType} from 'utils/notificator';
import useInstructorNavigation from 'navigation/hooks/useInstructorNavigation';
import {login} from 'redux/slices/auth';
import {useDispatch} from 'react-redux';

interface FormInput {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().required('Email jest wymagany').email('Email jest niepoprawny'),
  password: yup.string().required('Hasło jest wymagane'),
});

const LoginForm: React.FC = () => {
  const {mutate, error, isPending, data} = useLoginMutation();
  const {setAccessToken} = useToken();
  const toast = useToast();
  const naviagtion = useInstructorNavigation();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(({email, password}: FormInput) => {
    mutate(
      {email, password},
      {
        onSuccess: data => {
          const token = data.headers.authorization.split(' ')[1];
          setAccessToken(token);
          dispatch(login());
        },
        onError: () => {
          toast.show(customToastType.error({message: 'Błędne dane logowania'}));
        },
      },
    );
  }, []);

  return (
    <SimpleForm validationSchema={validationSchema} onSubmit={handleSubmit}>
      <InputWithHeader name="email" placeholder="Podaj swój email" label="Email" />
      <InputWithHeader
        name="password"
        type="password"
        placeholder="Podaj swoje hasło"
        label="Hasło"
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

export default LoginForm;
