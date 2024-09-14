import {combineSlices} from '@reduxjs/toolkit';
import itemsSlice from './itemsSlice';
import authSlice from './authSlice';
import cartSlice from './cartSlice';

export default rootSlice = combineSlices({
  auth: authSlice,
  items: itemsSlice,
  cart: cartSlice,
});
