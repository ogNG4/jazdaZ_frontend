import React from 'react';
import {ToastProvider} from 'react-native-toast-notifications';
import {customToastType} from 'utils/notificator';

export const AppToastProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <ToastProvider
      placement="top"
      animationType="slide-in"
      duration={2000}
      renderType={customToastType}>
      {children}
    </ToastProvider>
  );
};
