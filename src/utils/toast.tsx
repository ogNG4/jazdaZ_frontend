import Toast, {BaseToast, ErrorToast, ToastProps} from 'react-native-toast-message';

export const toastConfig = {
  success: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'green'}}
      text1Style={{
        fontSize: 18,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),

  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 18,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),

  info: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={{borderLeftColor: '#34a8eb'}}
      text1Style={{
        fontSize: 18,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
};

export const showToast = (type: 'error' | 'success' | 'info', message: string) => {
  Toast.show({
    type: type,
    text1: type === 'error' ? 'Błąd!' : type === 'success' ? 'Sukces! ' : 'Info!',
    text2: message,
    visibilityTime: 2500,
  });
};
