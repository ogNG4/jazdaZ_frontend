import {Dimensions} from 'react-native';
import {YStack} from 'tamagui';

const DefaultLayout = ({children}: {children: React.ReactNode}) => {
  const height = Dimensions.get('window').height;
  return (
    <YStack bg={'#FCFCFC'} h={height} alignItems={'center'}>
      {children}
    </YStack>
  );
};

export default DefaultLayout;
