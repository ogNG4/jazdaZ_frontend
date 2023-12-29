import {memo} from 'react';
import {Stack, Text} from 'tamagui';

interface IChipProps {
  label: string;
  onPress?: () => void;
  bg?: string;
}

const Chip = ({label, onPress, bg}: IChipProps) => {
  return (
    <Stack
      bg={bg || '$colors.textSecondary'}
      px={'$2'}
      py={4}
      borderRadius={'$6'}
      onPress={onPress}>
      <Text >{label}</Text>
    </Stack>
  );
};

export default memo(Chip);
