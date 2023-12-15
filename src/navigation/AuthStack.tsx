import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthParamList} from './types/router';
import LoginScreen from 'screens/auth/LoginScreen';

interface IRootNavigation {}
const AppStack = createStackNavigator<AuthParamList>();
export const AuthStack: React.FC<IRootNavigation> = () => {
  return (
    <AppStack.Navigator screenOptions={{
        headerShown: false
    }}>
      <AppStack.Group>
        <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Group>
    </AppStack.Navigator>
  );
};
