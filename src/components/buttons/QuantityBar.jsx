import {View, Text} from 'react-native';
import React from 'react';
import BasicButton from './BasicButton';
import {styled} from 'nativewind';

const QuantityBar = ({
  count = 0,
  decreaseCount = () => {},
  increaseCount = () => {},
}) => {
  return (
    <View>
      <View className="p-2 flex flex-row ">
        <BasicButton onPress={decreaseCount} label={'-'} />
        <View className="p-4 py-3 items-center justify-between">
          <Text className="dark:text-white">{count}</Text>
        </View>
        <BasicButton onPress={increaseCount} label={'+'} />
      </View>
    </View>
  );
};

export default styled(QuantityBar);
