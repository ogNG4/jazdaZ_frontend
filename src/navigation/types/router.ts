import { StackNavigationProp } from '@react-navigation/stack';

export type InstructorParamList = {};
export type StudentParamList = {};
export type AuthParamList = {};

export type InstructorRouterParams = StackNavigationProp<InstructorParamList>;
export type StudentRouterParams = StackNavigationProp<StudentParamList>;
export type AuthRouterParams = StackNavigationProp<AuthParamList>;
