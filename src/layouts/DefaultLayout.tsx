import {Dimensions} from 'react-native';
import {ScrollView, YStack} from 'tamagui';

const DefaultLayout = ({children}: {children: React.ReactNode}) => {
  const height = Dimensions.get('window').height;
  return (
    <YStack bg={'$colors.mainBg'} h={height}  px={'$1'} alignItems='center'>
      {children}
    </YStack>
  );
};

export default DefaultLayout;
