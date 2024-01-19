import useCoursesQuery, { Course } from 'hooks/queries/useCoursesQuery';
import React from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {Text} from 'tamagui';
import CourseCard from './components/CourseCard';
import DefaultLayout from 'layouts/DefaultLayout';

const CoursesScreen: React.FC = () => {
  const {data} = useCoursesQuery();

  console.log(data);

  const renderItem = ({item}: {item: Course}) => <CourseCard key={item.id} course={item} />;

  return (
    <DefaultLayout>
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

export default CoursesScreen;
