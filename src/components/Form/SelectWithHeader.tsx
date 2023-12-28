import {memo} from 'react';
import {UseControllerProps, useController} from 'react-hook-form';
import {Stack, Text, YStack} from 'tamagui';

import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet} from 'react-native';

interface SelectWithHeaderProps extends UseControllerProps {
  label: string;
  placeholder: string;
  items: {label: string; value: string}[];
}
function SelectWithHeader({name, placeholder, label, items}: SelectWithHeaderProps) {
  const {
    field: {value, onChange},
    fieldState: {error},
  } = useController({name});

  return (
    <YStack space={2} width={'100%'}>
      <Text color={'$colors.darkPurple'} fontSize={'$2'} fontWeight={'400'}>
        {label}
      </Text>
      <Stack
        borderColor={'$colors.textSecondaryLight'}
        borderWidth={1}
        borderRadius={8}
        height={45}
        justifyContent={'center'}
        overflow="hidden">
        <RNPickerSelect
          style={pickerSelectStyles}
          value={value}
          placeholder={{label: 'Wybierz rolę', value: null}}
          onValueChange={onChange}
          items={items}
        />
      </Stack>
      {error && <Text color={'$red10'}>{error?.message}</Text>}
    </YStack>
  );
}

export default memo(SelectWithHeader);

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    color: '#9C9C9C',
    backgroundColor: 'white',
  },
});
