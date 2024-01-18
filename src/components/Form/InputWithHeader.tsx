import {memo} from 'react';
import {UseControllerProps, useController} from 'react-hook-form';
import {Input, InputProps, Text, YStack} from 'tamagui';

interface InputWithHeaderProps extends UseControllerProps {
  label: string;
  placeholder: string;
  type?: string;
}
function InputWithHeader({name, placeholder, label, type, ...props}: InputWithHeaderProps & InputProps ) {
  const {
    field: {value, onChange},
    fieldState: {error},
  } = useController({name});

  return (
    <YStack space={2} width={'100%'}>
      <Text color={'$colors.darkPurple'} fontSize={'$2'} fontWeight={'400'}>
        {label}
      </Text>
      <Input
        width={'100%'}
        value={value}
        placeholder={placeholder}
        bg={'white'}
        secureTextEntry={type === 'password'}
        color={'$colors.textSecondary'}
        borderColor={'$colors.textSecondaryLight'}
        onChangeText={onChange}
        {...props}
      />
      {error && <Text color={'$red10'}>{error?.message}</Text>}
    </YStack>
  );
}

export default memo(InputWithHeader);
