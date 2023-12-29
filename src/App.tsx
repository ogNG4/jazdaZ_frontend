import React from 'react';
import AppNavigation from '../src/navigation/Routes';
import {AppProviders} from './providers/AppProviders';
import Toast from 'react-native-toast-message';
import {toastConfig} from 'utils/toast';


function App(): JSX.Element {

  return (
    <AppProviders>
      <AppNavigation />
      <Toast config={toastConfig} />
    </AppProviders>
  );
}

export default App;
