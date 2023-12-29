import React from 'react';
import {Stack} from 'tamagui';
import SectionHeader from 'components/Typography/SectionHeader';
import ScrollLayout from 'layouts/ScrollLayout';
import CreateCategoryForm from './components/CreateCategoryForm';
import {Dimensions} from 'react-native';

const CreateCategoryScreen: React.FC = () => {
  const height = Dimensions.get('window').height;
  return (
    <ScrollLayout>
      <Stack w={'100%'} justifyContent="center" height={height}>
        <SectionHeader title="Utwórz kategorię" subtitle="Dodaj kategorię kursu!" mb={'$4'} />
        <CreateCategoryForm />
      </Stack>
    </ScrollLayout>
  );
};

export default CreateCategoryScreen;
