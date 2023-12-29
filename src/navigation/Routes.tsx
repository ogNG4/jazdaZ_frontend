import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {InstructorStack} from './InstructorStack';
import {AuthStack} from './AuthStack';
import useToken from 'hooks/useToken';
import {navigationRef} from './utils/root-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from 'redux/slices/auth';
import {usePermissions} from 'hooks';
import {Role} from 'types/role.enum';
import {StudentStack} from './StudentStack';
import LoadingScreen from 'screens/LoadingScreen';
import instance from 'services/api/axios-instance';

const Routes = () => {
  const {token} = useToken();
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state: any) => state.auth.isLogged);
  const {hasPermissions: isAdmin} = usePermissions([Role.ADMIN, Role.SUPER_ADMIN], 'OR');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      if (token) {
        dispatch(login(token));
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } else {
        dispatch(logout());
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    };

    checkLoginStatus();
  }, [token, dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {isLoggedin ? isAdmin ? <InstructorStack /> : <StudentStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
