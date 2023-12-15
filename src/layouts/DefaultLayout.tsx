import {Dimensions} from 'react-native';
import {YStack} from 'tamagui';

const DefaultLayout = ({children}: {children: React.ReactNode}) => {
  const height = Dimensions.get('window').height;
  return (
    <YStack bg={'$colors.mainBg'} h={height} alignItems={'center'} p={'$5'}>
      {children}
    </YStack>
  );
};

export default DefaultLayout;
