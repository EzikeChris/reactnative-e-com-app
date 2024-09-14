import {configureStore} from '@reduxjs/toolkit';
import rootSlice from './slices/rootSlice';
import logger from 'redux-logger';


// FYI : Since there are no any persist stores since because it is not mentioned

export const store = configureStore({
  reducer: rootSlice,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});
