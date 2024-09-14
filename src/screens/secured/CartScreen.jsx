import {styled} from 'nativewind';
import React, {useMemo} from 'react';
import {SafeAreaView, View} from 'react-native';
import {ShoppingCart} from 'react-native-feather';
import {useDispatch, useSelector} from 'react-redux';

import BasicButton from '../../components/buttons/BasicButton';
import CartItem from '../../components/buttons/CartItem';
import {totalAmountExactor} from '../../redux/selectors/cartSelector';
import {removeItemFromCart} from '../../redux/slices/cartSlice';

const CartScreen = () => {
  const dispatch = useDispatch();
  const {cart = []} = useSelector(state => state.cart);
  const total = useSelector(totalAmountExactor);

  const totalItems = useMemo(() => cart.length, [cart]);

  const handleOnPressRemove = id => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <SafeAreaView className="flex-1  dark:bg-slate-800">
      <View className="flex-1 p-1">
        {cart.map(({SKU, sizesSet, mainImage, id, name}) => (
          <CartItem
            key={id}
            uri={mainImage}
            label={name}
            sizesSet={sizesSet}
            id={id}
            onPressRemove={handleOnPressRemove}
          />
        ))}
      </View>
      <View className="p-4">
        <BasicButton
          label={`Checkout ${total}`}
          icon={ShoppingCart}
          disabled={!totalItems}
        />
      </View>
    </SafeAreaView>
  );
};

export default styled(CartScreen);
