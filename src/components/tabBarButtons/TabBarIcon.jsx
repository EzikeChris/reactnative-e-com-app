import {styled, useColorScheme} from 'nativewind';
import React, {useMemo} from 'react';
import {TouchableOpacity, useWindowDimensions, View} from 'react-native';
import {COLORS} from '../../constants/colors';

const ICON_SIZE = 20;

const TabBarIcon = ({icon: Icon, onPress, selected}) => {
  const {colorScheme} = useColorScheme();
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  const minWidth = useMemo(() => (SCREEN_WIDTH * 0.8) / 3);

  const iconDetails = {
    dark: {
      stroke: COLORS.PRIMARY_WHITE,
    },
    light: {
      stroke: COLORS.PRIMARY_BLACK,
    },
  };

  const containerClass = useMemo(
    () => `
    bg-red-100 dark:bg-blue-400
  ${selected && 'bg-slate-500 dark:bg-gray-500 '} 
  rounded-full 
  p-3
`,
    [selected],
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{minWidth}}
      className="flex items-center justify-between p-3 light:bg-red-800">
      <View className={containerClass}>
        <Icon
          width={ICON_SIZE}
          height={ICON_SIZE}
          strokeWidth={2.5}
          {...iconDetails[colorScheme]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default styled(TabBarIcon);
