import {memo} from 'react';
import {Text} from 'tamagui';

interface ParagraphProps {
  children: React.ReactNode | string;
  bold?: boolean;
}

const Paragraph = ({children, bold}: ParagraphProps) => {
  return (
    <Text fontWeight={bold ? '500' : '300'} color={'$colors.textPrimary'}>
      {children}
    </Text>
  );
};

export default memo(Paragraph);
