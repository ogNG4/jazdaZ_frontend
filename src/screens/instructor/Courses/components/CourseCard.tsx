import CardWrapper from 'components/Card/CardWrapper';
import {memo} from 'react';
import {XStack, YStack} from 'tamagui';
import {useDeleteVehicleMutation} from 'hooks/mutations';
import {useQueryClient} from '@tanstack/react-query';
import useInstructorNavigation from 'navigation/hooks/useInstructorNavigation';
import {Paragraph} from 'components/Typography';
import {Course} from 'hooks/queries/useCoursesQuery';

const CourseCard = ({course}: {course: Course}) => {
  const CardItem = ({label, value}: {label: string; value: string}) => {
    return (
      <XStack>
        <Paragraph bold={true}>{label}: </Paragraph>
        <Paragraph>{value}</Paragraph>
      </XStack>
    );
  };

  return (
    <CardWrapper px={'$3'}>
      <XStack justifyContent="space-between">
        <YStack>
          <CardItem label="Nazwa" value={course.name} />
          <CardItem label="Status" value={course.status} />
          <CardItem label="Data rozpoczęcia" value={course.startDate} />
          <CardItem label="Kategoria" value={course.courseCategory.drivingLicenceCategory} />
        </YStack>
      </XStack>
    </CardWrapper>
  );
};

export default memo(CourseCard);
