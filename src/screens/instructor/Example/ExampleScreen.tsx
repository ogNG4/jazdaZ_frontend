import React, {useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, reset} from 'redux/slices/example';
import {Text, Button} from 'tamagui';
import {useToast} from 'react-native-toast-notifications';
import useToken from 'hooks/useToken';
import {logout} from 'redux/slices/auth';
import {decodeToken} from 'utils/token';

const ExampleScreen: React.FC = () => {
  const count = useSelector((state: any) => state.example.count);
  const dispatch = useDispatch();
  const {removeAccessToken, token, decodedToken} = useToken();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const toast = useToast();

  console.log('decodedToken', decodedToken);

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
        onPress={handleIncrement}>
        Increment
      </Button>
      <Button
        bg={'$red10'}
        color={'white'}
        w={'50%'}
        alignSelf={'center'}
        marginTop={12}
        onPress={handleDecrement}>
        Decrement
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
