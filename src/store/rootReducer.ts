import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './slices/user';

export const rootReducer = combineReducers({
  user: userSlice.reducer
});

declare global {
  type RootState = ReturnType<typeof rootReducer>;
}
