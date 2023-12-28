import {Form} from 'tamagui';
import {SimpleForm, InputWithHeader} from 'components/Form';
import SolidButton from 'components/Button/SolidButton';
import * as yup from 'yup';
import React, {useCallback} from 'react';
import useLoginMutation from 'hooks/mutations/useLoginMutation';
import useToken from 'hooks/useToken';
import {login} from 'redux/slices/auth';
import {useDispatch} from 'react-redux';
import {showToast} from 'utils/toast';

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
  const {setAccessToken, token} = useToken();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(({email, password}: FormInput) => {
    mutate(
      {email, password},
      {
        onSuccess: data => {
          const token = data.headers.authorization.split(' ')[1];
          setAccessToken(token);
          dispatch(login(token));
        },
        onError: error => {
          showToast('error', error?.response?.data as string);
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
