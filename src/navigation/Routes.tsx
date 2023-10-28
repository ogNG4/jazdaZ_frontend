import {NavigationContainer} from '@react-navigation/native';
import {InstructorStack} from './InstructorStack';
import {navigationRef} from './utils/root-navigation';

export const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <InstructorStack />
    </NavigationContainer>
  );
};

export default Routes;
