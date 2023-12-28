import {TamaguiAppProvider} from './TamaguiAppProvider';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import {asyncStoragePersister, queryClient} from 'services/api/query-client';

export const AppProviders: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Provider store={store}>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{persister: asyncStoragePersister}}>
        <TamaguiAppProvider>{children}</TamaguiAppProvider>
      </PersistQueryClientProvider>
    </Provider>
  );
};
