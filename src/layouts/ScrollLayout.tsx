import {Dimensions} from 'react-native';
import {ScrollView, YStack} from 'tamagui';

const ScrollLayout = ({children}: {children: React.ReactNode}) => {
  const height = Dimensions.get('window').height;
  return (
    <ScrollView>
      <YStack bg={'$colors.mainBg'} h={height} p={'$5'} alignItems="center">
        {children}
      </YStack>
    </ScrollView>
  );
};

export default ScrollLayout;
