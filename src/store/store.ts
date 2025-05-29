import { configureStore, type Action, type ThunkAction } from '@reduxjs/toolkit';
import { gameReducer } from './game/reducer';
import { AppSlice } from './slice';

export const store = configureStore({
  reducer: {
    [AppSlice.GAME]: gameReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;