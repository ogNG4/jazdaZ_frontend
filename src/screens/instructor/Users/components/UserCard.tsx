import {User} from 'hooks/queries/useUsersQuery';
import {memo} from 'react';
import {Avatar, Card, Text, XStack, YStack} from 'tamagui';
import {Chip} from 'components/Content';
import {Role} from 'types/role.enum';
import CardWrapper from 'components/Card/CardWrapper';

const UserCard = ({user}: {user: User}) => {
  return (
    <CardWrapper justifyContent="space-between" alignItems="center" flexDirection="row">
      <XStack alignItems="center" gap={'$2'}>
        <Avatar circular bg={'white'} borderWidth={1} borderColor={'$colors.textSecondary'}>
          <Avatar.Image
            source={{
              width: 200,
              height: 200,
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png',
            }}
          />
          <Avatar.Fallback bc="white" />
        </Avatar>
        <YStack>
          <Text color={'$colors.textPrimary'} fontSize={'$4'}>
            {user.firstName}
          </Text>
          <Text color={'$colors.textPrimary'} fontSize={'$4'}>
            {user.lastName}
          </Text>
          <Text color={'$colors.textSecondary'}>{user.email}</Text>
        </YStack>
      </XStack>
      <XStack>
        {user.userType === Role.SUPER_ADMIN && (
          <Chip label={'SUPER ADMIN'} bg={'$colors.darkPurple'} />
        )}
        {user.userType === Role.ADMIN && <Chip label={'INSTRUKTOR'} bg={'#4c73d4'} />}
        {user.userType === Role.USER && <Chip label={'STUDENT'} bg={'#1ac97b'} />}
      </XStack>
    </CardWrapper>
  );
};

export default memo(UserCard);
