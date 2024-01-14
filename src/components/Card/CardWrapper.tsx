import {PropsWithChildren, memo} from 'react';
import {Card, CardProps} from 'tamagui';

const CardWrapper = ({children, ...props}: PropsWithChildren & CardProps) => {
  return (
    <Card
      bg={'white'}
      px={'$2'}
      py={'$3'}
      overflow="hidden"
      borderWidth={1}
      borderColor={'$colors.textSecondaryLight'}
      mb={'$3'}
      w={'100%'}
      {...props}>
      {children}
    </Card>
  );
};

export default memo(CardWrapper);
