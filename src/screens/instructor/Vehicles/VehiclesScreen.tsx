import {useToken} from 'hooks';
import {useVehiclesQuery} from 'hooks/queries';
import DefaultLayout from 'layouts/DefaultLayout';
import React from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';

import {Vehicle} from '../../../hooks/queries/useVehiclesQuery';
import VehicleCard from './components/VehicleCard';

const VehiclesScreen: React.FC = () => {
  const {removeAccessToken} = useToken();
  const dispatch = useDispatch();
  const {data} = useVehiclesQuery();
  const renderItem = ({item}: {item: Vehicle}) => <VehicleCard key={item.id} car={item} />;

  return (
    <DefaultLayout>
      {/* <Button
        bg={'$blue10'}
        color={'white'}
        w={'50%'}
        alignSelf={'center'}
        my={12}
        onPress={() => {
          removeAccessToken();
          dispatch(logout());
        }}>
        Logout
      </Button> */}
      <FlatList
        style={{
          width: '100%',
          marginBottom: 115,
          paddingTop: 10,
          paddingHorizontal: 10,
        }}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </DefaultLayout>
  );
};

export default VehiclesScreen;
