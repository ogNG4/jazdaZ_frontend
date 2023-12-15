import React, {memo} from 'react';
import {H1, Text, YStack} from 'tamagui';

type SectionHeaderProps = {
  title: string;
  subtitle: string;
} & React.ComponentProps<typeof YStack>

const SectionHeader = ({title, subtitle, ...props}: SectionHeaderProps) => {
  return (
    <YStack {...props}>
      <H1 color={'$colors.textPrimary'}>{title}</H1>
      <Text fontSize={'$3'} color={'$colors.textSecondary'}>
        {subtitle}
      </Text>
    </YStack>
  );
};

export default memo(SectionHeader);
