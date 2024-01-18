import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {InstructorParamList} from './types/router';
import CreateUserScreen from 'screens/instructor/Users/CreateUserScreen';
import {InstructorTabs} from './InstructorTabs';
import CreateCategoryScreen from 'screens/instructor/Categories/CreateCategoryScreen';
import CreateVehicleScreen from 'screens/instructor/Vehicles/CreateVehicleScreen';
import EditVehicleScreen from 'screens/instructor/Vehicles/EditVehicleScreen';
import CreateCourseScreen from 'screens/instructor/Courses/CreateCourseScreen';

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
        <AppStack.Screen name="CreateCategory" component={CreateCategoryScreen} />
        <AppStack.Screen name="CreateVehicle" component={CreateVehicleScreen} />
        <AppStack.Screen name="CreateCourse" component={CreateCourseScreen} />
        <AppStack.Screen name="EditVehicle" component={EditVehicleScreen} />

      </AppStack.Group>
    </AppStack.Navigator>
  );
};
