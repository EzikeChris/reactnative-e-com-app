import {styled} from 'nativewind';
import React, {useMemo} from 'react';
import {Image, Text, View} from 'react-native';
import {Trash} from 'react-native-feather';
import BasicButton from './BasicButton';

const CartItem = ({
  id = '',
  uri = '',
  label = '',
  sizesSet = [],
  onPressRemove = () => {},
}) => {
  const totalQty = useMemo(
    () =>
      sizesSet.reduce((a, c) => {
        const value = Object.values(c)[0];
        return a + value;
      }, 0),
    [sizesSet],
  );

  const handelOnPressDelete = () => {
    onPressRemove(id);
  };

  const SelectedItems = () => {
    return sizesSet.map(item => {
      const key = Object.keys(item)[0];
      const value = item[key];
      return (
        <View>
          <Text>{`${key} X ${value}`}</Text>
        </View>
      );
    });
  };

  return (
    <View className="bg-gray-300 rounded-md p-3 m-1 flex-row justify-between">
      <View className="w-12">
        <Image source={{uri}} style={{width: 50, height: 50}} />
      </View>

      <View className="flex-1 px-2">
        <Text className="text-left text-black">{label}</Text>
        <Text>{`Total Items : ${totalQty}`}</Text>
        <SelectedItems />
      </View>

      <View className="w-13">
        <BasicButton icon={Trash} onPress={handelOnPressDelete} />
      </View>
    </View>
  );
};
export default styled(CartItem);
