import React from 'react';

import {Stack} from 'tamagui';
import SectionHeader from 'components/Typography/SectionHeader';
import CreateUserForm from './components/CreateUserForm';

import ScrollLayout from 'layouts/ScrollLayout';

const CreateUserScreen: React.FC = () => {
  return (
    <ScrollLayout>
      <Stack w={'100%'}>
        <SectionHeader title="Utwórz konto" subtitle="Dodaj kursanta lub instruktora" mb={'$4'} />
        <CreateUserForm />
      </Stack>
    </ScrollLayout>
  );
};

export default CreateUserScreen;
