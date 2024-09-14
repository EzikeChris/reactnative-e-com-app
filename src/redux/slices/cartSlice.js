import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  cart: [],
  error: false,
};

const cartSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const existingItemIndex = state.cart.findIndex(
        item => item.id === action.payload.id
      );
      
      if (existingItemIndex !== -1) {
        const existingItem = state.cart[existingItemIndex];
        const updatedSizesSet = [
          ...existingItem.sizesSet.filter(size => !size[action.payload.selectedSize]),
          { [action.payload.selectedSize]: action.payload.count }
        ];
      
        state.cart[existingItemIndex] = {
          ...existingItem,
          sizesSet: updatedSizesSet
        };
      } else {
        state.cart.push({
          ...action.payload,
          sizesSet: [
            { [action.payload.selectedSize]: action.payload.count }
          ]
        });
      }
    },
    removeItemFromCart(state, action) {
      state.cart = state.cart.filter(product => product.id != action.payload);
    },
  },
});

export const {addItemToCart, removeItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;
