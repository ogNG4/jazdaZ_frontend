import useCoursesQuery from 'hooks/queries/useCoursesQuery';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Text} from 'tamagui';

const CoursesScreen: React.FC = () => {
  const {data} = useCoursesQuery();

  return (
    <ScrollView>
      <Text alignSelf={'center'} marginTop={24} fontSize={'$13'}>
        Courses
      </Text>
    </ScrollView>
  );
};

export default CoursesScreen;
