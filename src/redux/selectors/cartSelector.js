import {createSelector} from '@reduxjs/toolkit';

export const totalAmountExactor = createSelector(
    [state => state.cart.cart],
    (cart) => {
      const unit = cart[0]?.price?.currency || "";

      const totalAmount = cart.reduce((total, item) => {
        const itemPrice = parseFloat(item.price.amount);
        const itemTotal = item.sizesSet.reduce((sum, size) => {
          const [_, quantity] = Object.entries(size)[0];
          return sum + (quantity * itemPrice);
        }, 0);
        return total + itemTotal;
      }, 0);
  
      return `${totalAmount} ${unit}`;
    }
  );