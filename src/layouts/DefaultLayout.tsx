import {Dimensions} from 'react-native';
import {ScrollView, YStack} from 'tamagui';

const DefaultLayout = ({children}: {children: React.ReactNode}) => {
  const height = Dimensions.get('window').height;
  return (
    <ScrollView automaticallyAdjustContentInsets={true}>
      <YStack bg={'$colors.mainBg'} h={height} alignItems={'center'} p={'$5'}>
        {children}
      </YStack>
    </ScrollView>
  );
};

export default DefaultLayout;
