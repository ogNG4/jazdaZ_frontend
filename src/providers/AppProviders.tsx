import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TamaguiAppProvider} from './TamaguiAppProvider';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import {asyncStoragePersister, queryClient} from 'services/api/query-client';

interface IAppProviders {
  children: any;
}

export const AppProviders: React.FC<IAppProviders> = props => {
  return (
    <Provider store={store}>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{persister: asyncStoragePersister}}>
        <TamaguiAppProvider>{props.children}</TamaguiAppProvider>
      </PersistQueryClientProvider>
    </Provider>
  );
};
