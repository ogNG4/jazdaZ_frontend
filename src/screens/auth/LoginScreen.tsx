import {Stack} from 'tamagui';

import AuthLayout from 'layouts/AuthLayout';
import SectionHeader from 'components/Typography/SectionHeader';

import LoginForm from './components/LoginForm';

const LoginScreen: React.FC = () => {
  return (
    <AuthLayout>
      <Stack w={'100%'}>
        <SectionHeader title="Logowanie" subtitle="Zaloguj się do swojego konta!" mb={'$4'} />
        <LoginForm />
      </Stack>
    </AuthLayout>
  );
};

export default LoginScreen;
