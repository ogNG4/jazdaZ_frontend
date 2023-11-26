import {NavigationContainer} from '@react-navigation/native';
import {InstructorStack} from './InstructorStack';
import {navigationRef} from './utils/root-navigation';
import LoadingScreen from 'screens/LoadingScreen';

export const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <InstructorStack />
      {/* <LoadingScreen/> */}
    </NavigationContainer>
  );
};

export default Routes;
