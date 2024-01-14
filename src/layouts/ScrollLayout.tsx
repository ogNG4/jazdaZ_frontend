import {Dimensions} from 'react-native';
import {ScrollView, YStack, Stack} from 'tamagui';

const ScrollLayout = ({children}: {children: React.ReactNode}) => {
  const height = Dimensions.get('window').height;
  return (
    <ScrollView>
      <YStack bg={'$colors.mainBg'} h={height} p={'$5'} alignItems="center">
      <Stack w={'100%'}>
        {children}
      </Stack>
      </YStack>
    </ScrollView>
  );
};

export default ScrollLayout;
