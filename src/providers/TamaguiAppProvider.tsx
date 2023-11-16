import React from 'react';
import config from '../../tamagui.config';
import {TamaguiProvider} from 'tamagui';

export const TamaguiAppProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <TamaguiProvider config={config}>{children}</TamaguiProvider>;
};
