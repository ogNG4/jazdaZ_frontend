import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {InstructorParamList} from './types/router';
import CreateUserScreen from 'screens/instructor/Users/CreateUserScreen';
import {InstructorTabs} from './InstructorTabs';

interface IRootNavigation {}
const AppStack = createStackNavigator<InstructorParamList>();
export const InstructorStack: React.FC<IRootNavigation> = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen name="Home" component={InstructorTabs} />
        <AppStack.Screen name="CreateUser" component={CreateUserScreen} />
      </AppStack.Group>
    </AppStack.Navigator>
  );
};
