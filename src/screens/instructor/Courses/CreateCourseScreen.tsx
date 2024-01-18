import React from 'react';

import {Stack} from 'tamagui';
import SectionHeader from 'components/Typography/SectionHeader';

import ScrollLayout from 'layouts/ScrollLayout';
import CourseForm from './components/CourseForm';
import useCreateCourseMutation, {CreateCourse} from 'hooks/mutations/useCreateCourseMutation';
import {showToast} from 'utils/toast';

const CreateCourseScreen: React.FC = () => {
  const {mutate, isPending} = useCreateCourseMutation();

  const handleSubmit = ({name, status, startDate, courseCategory}: CreateCourse) => {
    mutate(
      {name, status, startDate, courseCategory},
      {
        onSuccess: () => {
          showToast('success', 'Pomyślnie utworzono kurs');
        },
        onError: error => {
          showToast('error', error?.response?.data as string);
        },
      },
    );
  };
  return (
    <ScrollLayout>
      <Stack w={'100%'}>
        <SectionHeader title="Utwórz konto" subtitle="Dodaj kursanta lub instruktora" mb={'$4'} />
        <CourseForm onSubmit={handleSubmit} isLoading={isPending} />
      </Stack>
    </ScrollLayout>
  );
};

export default CreateCourseScreen;
