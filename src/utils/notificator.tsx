import React from 'react';
import {Dimensions} from 'react-native';
import {Text, View, XStack} from 'tamagui';
import {XCircle, CheckCircle2, AlertCircle} from 'lucide-react-native';
import {ToastProps} from 'react-native-toast-notifications/lib/typescript/toast';

const width = Dimensions.get('window').width;

interface IToast {
  message: string | React.ReactElement;
  color?: string;
  icon: React.ReactElement;
}

const CustomToastLayout = ({message, icon}: IToast) => {
  return (
    <View mb={'$2'} width={width * 0.7} bg={'#27272a'} borderRadius={'$2'} px={'$2'} py={'$3'}>
      <XStack alignItems="center" space={'$2'}>
        {icon}
        <Text color={'white'} fontWeight={'$6'} fontSize={'$7'}>
          {message}
        </Text>
      </XStack>
    </View>
  );
};

const createCustomToast = (
  type: 'error' | 'success' | 'warning' | 'info',
  defaultMessage: string,
  color: string,
  iconElement: JSX.Element,
) => {
  return (toast: ToastProps) => (
    <CustomToastLayout
      message={toast.message || defaultMessage}
      color={color}
      icon={React.cloneElement(iconElement, {color: color, size: 28})}
    />
  );
};

export const customToastType = {
  error: createCustomToast('error', 'Wystąpił błąd!', '#dc2626', <XCircle />),
  success: createCustomToast('success', 'Sukces!', '#22c55e', <CheckCircle2 />),
  warning: createCustomToast('warning', 'Ostrzeżenie!', '#eab308', <AlertCircle />),
  info: createCustomToast('info', 'Informacja!', '#0ea5e9', <AlertCircle />),
};
