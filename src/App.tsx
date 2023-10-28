import React from 'react';
import AppNavigation from '../src/navigation/Routes';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {AppProviders} from './providers/AppProviders';

function App(): JSX.Element {
  return (
    <AppProviders>
      <AppNavigation />
    </AppProviders>
  );
}

export default App;
