import {Dimensions} from 'react-native';
import {Stack, YStack} from 'tamagui';
import Logo from 'assets/images/app-logo.svg';

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  const height = Dimensions.get('window').height;
  return (
    <Stack bg={'$colors.mainBg'} h={height} alignItems={'center'} px={'$7'}>
      <Stack h={'15%'}  w={'100%'} justifyContent={'flex-end'} alignItems={'center'}>
        <Logo />
      </Stack>
      <Stack w={'100%'} h={'85%'} alignItems={'center'} justifyContent={'center'}>
        {children}
      </Stack>
    </Stack>
  );
};

export default AuthLayout;
