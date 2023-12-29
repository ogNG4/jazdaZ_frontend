import {useCategoriesQuery} from 'hooks/queries';
import {Category} from 'hooks/queries/useCategoriesQuery';
import DefaultLayout from 'layouts/DefaultLayout';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Spinner} from 'tamagui';
import CategoryCard from './components/CategoryCard';

const CategoriesScreen: React.FC = () => {
  const {data, isLoading} = useCategoriesQuery();

  const renderItem = ({item}: {item: Category}) => <CategoryCard key={item.id} category={item} />;

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

export default CategoriesScreen;
