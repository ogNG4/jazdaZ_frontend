import {memo} from 'react';
import {Button, Text} from 'tamagui';

interface ITopBarButtonProps {
  onPress?: () => void;
}

const TopBarButton = ({onPress}: ITopBarButtonProps) => {
  return (
    <Button size={'$3'} bg={'$colors.darkPurple'} mr={'$3'} onPress={onPress}>
      <Text fontSize={'$4'}>+</Text>
    </Button>
  );
};

export default memo(TopBarButton);
