import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StudentParamList} from './types/router';
import ExampleScreen from 'screens/student/Example/ExampleScreen';

interface IRootNavigation {}
const AppStack = createStackNavigator<StudentParamList>();
export const StudentStack: React.FC<IRootNavigation> = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Group>
        <AppStack.Screen name="Example" component={ExampleScreen} />
      </AppStack.Group>
    </AppStack.Navigator>
  );
};
