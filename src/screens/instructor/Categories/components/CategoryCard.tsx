import {memo} from 'react';
import {Button, Card, Text, XStack} from 'tamagui';
import {Chip} from 'components/Content';
import {Category, categoriesQueryKey} from 'hooks/queries/useCategoriesQuery';
import {Trash2Icon} from 'lucide-react-native';
import {useDeleteCategoryMutation} from 'hooks/mutations';
import {useQueryClient} from '@tanstack/react-query';
import {showToast} from 'utils/toast';

const CategoryCard = ({category}: {category: Category}) => {
  const {mutate} = useDeleteCategoryMutation();
  const client = useQueryClient();

  const handleSubmit = (id: string) => {
    mutate(
      {
        id,
      },
      {
        onSuccess: () => {
          client.invalidateQueries({queryKey: categoriesQueryKey});
          showToast('success', 'Pomyślnie usunięto kategorię');
        },
      },
    );
  };
  return (
    <Card
      bg={'white'}
      px={'$2'}
      py={'$3'}
      overflow="hidden"
      borderWidth={1}
      borderColor={'$colors.textSecondaryLight'}
      mb={'$3'}
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      w={'100%'}>
      <XStack alignItems="center" gap={'$2'}>
        <Chip label={category.drivingLicenceCategory} bg={'$colors.darkPurple'} />
        <Text color={'$colors.textPrimary'} fontSize={'$4'}>
          {category.name}
        </Text>
      </XStack>
      <Button size={'$2'} variant="outlined" onPress={() => handleSubmit(category.id)}>
        <Trash2Icon size={18} color="black" />
      </Button>
    </Card>
  );
};

export default memo(CategoryCard);
