import {styled} from 'nativewind';
import React, {useMemo, useState} from 'react';
import {Alert, Image, ScrollView, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import BasicButton from '../../components/buttons/BasicButton';
import QuantityBar from '../../components/buttons/QuantityBar';
import SizeCircularButton from '../../components/buttons/SizeCircularButton';
import {addItemToCart} from '../../redux/slices/cartSlice';

const ProductScreen = ({route,navigation}) => {
  const {item} = route.params;
  const {
    SKU = '',
    brandName = '',
    colour = '',
    description = '',
    id = '',
    mainImage = '',
    name = '',
    price: {amount = '', currency = ''} = {},
    sizes = [],
    stockStatus = '',
  } = item;
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(sizes[0] || 0);

  const availability = useMemo(() => stockStatus != 'IN STOCK', [stockStatus]);

  const increaseCount = () => {
    setCount(prevState => {
      if (prevState === 20) {
        return parseInt(prevState);
      } else {
        return parseInt(prevState) + 1;
      }
    });
  };
  const decreaseCount = () => {
    setCount(prevState => {
      if (prevState > 1) {
        return parseInt(prevState) - 1;
      } else {
        return parseInt(1);
      }
    });
  };

  const handelSelectedSlice = size => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        SKU,
        id,
        mainImage,
        name,
        count,
        selectedSize,
        price: {amount, currency},
      }),
    );

    Alert.alert(
      "Success",          
      "Added to cart",   
      [
        { 
          text: "OK", 
          onPress: () => navigation.goBack()
        } 
      ],
      { cancelable: false } 
    );

  };

  return (
    <ScrollView className="flex-1 dark:bg-slate-800">
      <View className="w-full">
        <Image
          source={{uri: item?.mainImage}}
          height={300}
          resizeMode={'cover'}
        />
      </View>
      <View className="p-2">
        <Text className="font-bold dark:text-white text-xl">{name}</Text>
        <Text className=" font-bold dark:text-white text-xs">{brandName}</Text>
        <Text className=" font-bold dark:text-white text-xs">{colour}</Text>
        <Text className=" font-bold dark:text-white text-xs">{`${amount} ${currency}`}</Text>
        <Text className=" font-bold dark:text-white text-xs">{`Availability : ${stockStatus}`}</Text>
        <Text className="py-1 text-xs dark:text-white italic">
          {description}
        </Text>
      </View>
      <View className="flex flex-row p-1 ">
        {sizes.map((size, index) => (
          <SizeCircularButton
            key={index}
            selectedItem={handelSelectedSlice}
            selectedSize={selectedSize}
            size={size}
          />
        ))}
      </View>
      <QuantityBar
        count={count}
        decreaseCount={decreaseCount}
        increaseCount={increaseCount}
      />
      <View className="p-2">
        <BasicButton
          onPress={handleAddToCart}
          label={'Add to Cart'}
          disabled={availability}
        />
      </View>
    </ScrollView>
  );
};

export default styled(ProductScreen);
