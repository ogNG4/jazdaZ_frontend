import React from 'react';
import {FlatList} from 'react-native';
import {Spinner} from 'tamagui';
import {useUsersQuery} from 'hooks/queries';
import {UserCard} from 'components/Content';
import DefaultLayout from 'layouts/DefaultLayout';
import {User} from 'hooks/queries/useUsersQuery';

const UsersScreen: React.FC = () => {
  const {data, isLoading} = useUsersQuery();
  const renderItem = ({item}: {item: User}) => <UserCard key={item.id} user={item} />;

  return (
    <DefaultLayout>
      {isLoading && <Spinner size="large" color={'$colors.textPrimary'} />}
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

export default UsersScreen;
