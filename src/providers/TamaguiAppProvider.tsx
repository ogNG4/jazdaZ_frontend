import React from 'react';
import config from '../../tamagui.config';
import {TamaguiProvider} from 'tamagui';
interface ITamaguiProvider {
  children: any;
}

export const TamaguiAppProvider: React.FC<ITamaguiProvider> = props => {
  return <TamaguiProvider config={config}>{props.children}</TamaguiProvider>;
};
