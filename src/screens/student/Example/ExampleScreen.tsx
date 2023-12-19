import useToken from 'hooks/useToken';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {logout} from 'redux/slices/auth';

import {Button, Text} from 'tamagui';

const ExampleScreen: React.FC = () => {
  const {removeAccessToken} = useToken();
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Text alignSelf={'center'} marginTop={24} fontSize={'$13'}>
        Hello student
      </Text>
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
