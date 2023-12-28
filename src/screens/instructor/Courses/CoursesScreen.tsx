import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Text} from 'tamagui';

const CoursesScreen: React.FC = () => {
  return (
    <ScrollView>
      <Text alignSelf={'center'} marginTop={24} fontSize={'$13'}>
        Vehicles screen
      </Text>
    </ScrollView>
  );
};

export default CoursesScreen;
