import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, reset} from 'redux/slices/example';
import {Text, Button} from 'tamagui';
import {useToast} from 'react-native-toast-notifications';

const ExampleScreen: React.FC = () => {
  const count = useSelector((state: any) => state.example.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());

    toast.show('Witam', {type: 'success'});
  };

  const toast = useToast();

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
        onPress={handleReset}>
        Reset
      </Button>
    </ScrollView>
  );
};

export default ExampleScreen;
