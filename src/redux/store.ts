import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import exampleReducer from './slices/example';
import authReducer from './slices/auth';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
