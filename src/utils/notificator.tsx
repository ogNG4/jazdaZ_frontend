import React from 'react';
import {Dimensions} from 'react-native';
import {Text, View, XStack} from 'tamagui';
import {XCircle, CheckCircle2, AlertCircle} from 'lucide-react-native';
import {ToastProps} from 'react-native-toast-notifications/lib/typescript/toast';

interface IToast {
  message: string | React.ReactElement | undefined | null;
  color?: string;
  icon: React.ReactElement;
}

const CustomToastLayout = ({message, icon}: IToast) => {
  return (
    <XStack alignItems="center" space={'$2'}>
      {icon}
      <Text color={'white'} fontWeight={'$6'} fontSize={'$7'}>
        {message}
      </Text>
    </XStack>
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
