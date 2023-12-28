import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Button} from 'tamagui';
import useInstructorNavigation from 'navigation/hooks/useInstructorNavigation';


const UsersScreen: React.FC = () => {
  const navigation = useInstructorNavigation();

  return (
    <ScrollView>
      <Text alignSelf={'center'} marginTop={24} fontSize={'$13'}>
        Users screen
      </Text>
      <Button w={'50%'} alignSelf={'center'} onPress={() => navigation.navigate('CreateUser')}>
        Create User
      </Button>
    </ScrollView>
  );
};

export default UsersScreen;
