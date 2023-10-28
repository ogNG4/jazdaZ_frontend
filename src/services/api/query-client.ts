import { QueryClient } from '@tanstack/react-query'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
});

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 10000 * 60,
            // cacheTime: 0,
        },
    },
})

export const clearQueryClient = () => {
    queryClient.clear();
    console.log('queryClient cleared');
};

