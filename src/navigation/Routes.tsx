import React, {useEffect} from 'react';
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

const Routes = () => {
  const {token} = useToken();
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state: any) => state.auth.isLogged);

  const {hasPermissions: isAdmin} = usePermissions([Role.ADMIN, Role.SUPER_ADMIN], 'OR');

  useEffect(() => {
    if (token) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  }, [token]);

  return (
    <NavigationContainer ref={navigationRef}>
      {isLoggedin ? (isAdmin ? <InstructorStack /> : <StudentStack />) : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
  