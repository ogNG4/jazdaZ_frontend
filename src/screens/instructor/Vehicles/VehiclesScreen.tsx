import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Button} from 'tamagui';


const VehiclesScreen: React.FC = () => {
  return (
    <ScrollView>
      <Text alignSelf={'center'} marginTop={24} fontSize={'$13'}>
        Vehicles screen
      </Text>
    </ScrollView>
  );
};

export default VehiclesScreen;
