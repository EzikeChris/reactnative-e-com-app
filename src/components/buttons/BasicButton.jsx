import {styled, useColorScheme} from 'nativewind';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constants/colors';

const ICON_SIZE = 20;

const BasicButton = ({
  onPress = () => {},
  label = '',
  icon: Icon,
  disabled = false,
}) => {
  const {colorScheme} = useColorScheme();

  const iconDetails = {
    dark: {
      stroke: disabled ? COLORS.PRIMARY_BLACK : COLORS.PRIMARY_WHITE,
    },
    light: {
      stroke: COLORS.PRIMARY_BLACK,
    },
  };

  return (
    <TouchableOpacity
      className={`px-4 py-3 bg-blue-200 dark:bg-blue-800 rounded-md items-center justify-center flex-row ${
        disabled && 'bg-gray-200 '
      }`}
      onPress={onPress}
      disabled={disabled}>
      {Icon && (
        <View className={`${!!label && 'pr-3'}`}>
          <Icon
            width={ICON_SIZE}
            height={ICON_SIZE}
            strokeWidth={2.5}
            {...iconDetails[colorScheme]}
          />
        </View>
      )}
      {label && (
        <Text
          selectable={false}
          className={`text-center ${
            disabled ? 'dark:bg-black-900 ' : 'dark:text-white'
          }`}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default styled(BasicButton);
