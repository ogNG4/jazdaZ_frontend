import DefaultLayout from 'layouts/DefaultLayout';
import Logo from 'assets/images/app-logo.svg';
import {Spinner, YStack} from 'tamagui';

const LoadingScreen: React.FC = () => {
  return (
    <DefaultLayout>
      <YStack mt={200} space={160}>
        <Logo />
        <Spinner
          size="large"
          style={{transform: [{scaleX: 1.8}, {scaleY: 1.8}]}}
          color={'$gray11'}
        />
      </YStack>
    </DefaultLayout>
  );
};

export default LoadingScreen;
