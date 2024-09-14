import {styled} from 'nativewind';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const ProductPressable = ({
  uri = '',
  label = '',
  fullObject = {},
  onPress = () => {},
}) => {
  const handleOnPress = () => {
    onPress(fullObject);
  };

  return (
    <TouchableOpacity className="flex w-1/2 p-1 " onPress={handleOnPress}>
      <View className="bg-red-100 dark:bg-blue-400 rounded-md p-3 items-center justify-between ">
        <Image source={{uri}} width={50} height={50} />
        <Text className="text-center dark:text-white-900">{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default styled(ProductPressable);
