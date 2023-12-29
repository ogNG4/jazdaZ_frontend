import {StackNavigationProp} from '@react-navigation/stack';

export type InstructorParamList = {
  Example: undefined;
  CreateUser: undefined;
  Home: undefined;
  CreateCategory: undefined;
};
export type StudentParamList = {
  Example: undefined;
};
export type AuthParamList = {
  Example: undefined;
  Login: undefined;
};

export type InstructorRouterParams = StackNavigationProp<InstructorParamList>;
export type StudentRouterParams = StackNavigationProp<StudentParamList>;
export type AuthRouterParams = StackNavigationProp<AuthParamList>;
