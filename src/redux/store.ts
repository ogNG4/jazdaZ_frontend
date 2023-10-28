import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import exampleReducer from './slices/example'

export const store = configureStore({
    reducer: {
        example: exampleReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
