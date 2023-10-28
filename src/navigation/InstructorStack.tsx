import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {InstructorParamList} from './types/router';
import ExampleScreen from 'screens/instructor/Example/ExampleScreen';

interface IRootNavigation {}
const AppStack = createStackNavigator<InstructorParamList>();
export const InstructorStack: React.FC<IRootNavigation> = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Group>
        <AppStack.Screen name="Example" component={ExampleScreen} />
      </AppStack.Group>
    </AppStack.Navigator>
  );
};
