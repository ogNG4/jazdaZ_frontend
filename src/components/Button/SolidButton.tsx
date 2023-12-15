import React, {memo} from 'react';
import {Button, Spinner, Text} from 'tamagui';
import {Activity, LucideIcon} from 'lucide-react-native';

interface ISolidButtonProps {
  label: string;
  bg?: string;
  pressedBg?: string;
  width?: string;
  color?: string;
  icon?: LucideIcon;
  onPress?: () => void;
  isLoading?: boolean;
}

const SolidButton: React.FC<ISolidButtonProps> = ({
  label,
  bg,
  pressedBg,
  width,
  color,
  icon,
  onPress,
  isLoading,
}) => {
  return (
    <Button
      borderRadius={'$2'}
      disabled={isLoading}
      onPress={onPress}
      bg={bg}
      width={width || '100%'}
      theme="active"
      pressStyle={{bg: pressedBg || '$gray10'}}
      color={color || 'white'}
      iconAfter={isLoading ? <Spinner /> : icon}>
      <Text fontWeight={'400'}>{label}</Text>
    </Button>
  );
};

export default memo(SolidButton);
