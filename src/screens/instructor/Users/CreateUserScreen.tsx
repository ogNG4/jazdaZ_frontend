import React from 'react';
import { Stack} from 'tamagui';
import SectionHeader from 'components/Typography/SectionHeader';
import CreateUserForm from './components/CreateUserForm';
import DefaultLayout from 'layouts/DefaultLayout';

const CreateUserScreen: React.FC = () => {
  return (
    <DefaultLayout>
      <Stack w={'100%'}>
        <SectionHeader title="Utwórz konto" subtitle="Dodaj kursanta lub instruktora" mb={'$4'} />
        <CreateUserForm />
      </Stack>
    </DefaultLayout>
  );
};

export default CreateUserScreen;
