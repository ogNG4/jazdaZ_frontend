import React from 'react';
import {Button, Text} from 'tamagui';
import {Activity, LucideIcon} from 'lucide-react-native';

interface ISolidButtonProps {
  label: string;
  bg?: string;
  pressedBg?: string;
  width?: string;
  color?: string;
  icon?: LucideIcon;
  onPress: () => void;
}

const SolidButton: React.FC<ISolidButtonProps> = ({
  label,
  bg,
  pressedBg,
  width,
  color,
  icon,
  onPress,
}) => {
  return (
    <Button
      onPress={onPress}
      bg={bg}
      width={width || '100%'}
      theme="active"
      pressStyle={{bg: pressedBg || '$gray10'}}
      color={color || 'white'}
      iconAfter={icon}>
      {label}
    </Button>
  );
};

export default SolidButton;
