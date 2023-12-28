import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {Text, Button} from 'tamagui';
import useToken from 'hooks/useToken';
import {logout} from 'redux/slices/auth';
import useInstructorNavigation from 'navigation/hooks/useInstructorNavigation';
import {showToast} from 'utils/toast';

const ExampleScreen: React.FC = () => {
  const count = useSelector((state: any) => state.example.count);
  const dispatch = useDispatch();
  const {removeAccessToken} = useToken();
  const navigation = useInstructorNavigation();

  return (
    <ScrollView>
      <Text alignSelf={'center'} marginTop={24} fontSize={'$13'}>
        {count}
      </Text>
      <Button
        bg={'$green10'}
        color={'white'}
        w={'50%'}
        alignSelf={'center'}
        marginTop={48}
        onPress={() => navigation.navigate('CreateUser')}>
        CreateUSer
      </Button>
      <Button
        bg={'$red10'}
        color={'white'}
        w={'50%'}
        alignSelf={'center'}
        marginTop={12}
        onPress={() => showToast('info', 'kruwacnka')}>
        ShowToast
      </Button>
      <Button
        bg={'$blue10'}
        color={'white'}
        w={'50%'}
        alignSelf={'center'}
        my={12}
        onPress={() => {
          removeAccessToken();
          dispatch(logout());
        }}>
        Reset
      </Button>
    </ScrollView>
  );
};

export default ExampleScreen;
