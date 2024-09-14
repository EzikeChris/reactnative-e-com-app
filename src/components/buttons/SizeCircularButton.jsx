import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const SizeCircularButton = ({
  selectedItem = () => {},
  selectedSize = 0,
  size = 0,
}) => {
  const onPressButton = () => {
    selectedItem(size);
  };
  return (
    <TouchableOpacity
      onPress={onPressButton}
      className={`flex h-10 w-10 bg-indigo-200 ${
        selectedSize == size && 'bg-indigo-500'
      } m-1 rounded-full items-center justify-center`}>
      <Text className="dark:text-white">{size}</Text>
    </TouchableOpacity>
  );
};

export default SizeCircularButton;
