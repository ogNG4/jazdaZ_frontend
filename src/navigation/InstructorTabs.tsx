import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UsersScreen from 'screens/instructor/Users/UsersScreen';
import CoursesScreen from 'screens/instructor/Courses/CoursesScreen';
import VehiclesScreen from 'screens/instructor/Vehicles/VehiclesScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Text} from 'tamagui';

interface IRootNavigation {}
const Tab = createBottomTabNavigator();
export const InstructorTabs: React.FC<IRootNavigation> = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Users':
              iconName = 'account-group';
              break;
            case 'Vehicles':
              iconName = 'car';
              break;
            case 'Courses':
              iconName = 'book';
              break;
          }
          return <MaterialIcon name={iconName} size={size} color={color} />;
        },

        // headerShown: false,
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 56,
        },
        tabBarActiveTintColor: '#4E0189',
      })}>
      <Tab.Screen
        name="Users"
        component={UsersScreen}
        options={({navigation, route}) => ({
          headerRight: () => (
            <Button
              size={'$3'}
              bg={'$colors.darkPurple'}
              mr={'$3'}
              onPress={() => navigation.navigate('CreateUser')}>
              <Text fontSize={'$4'}>+</Text>
            </Button>
          ),

          headerTitle: 'Użytkownicy',
        })}
      />
      <Tab.Screen name="Vehicles" component={VehiclesScreen} />
      <Tab.Screen name="Courses" component={CoursesScreen} />
    </Tab.Navigator>
  );
};
