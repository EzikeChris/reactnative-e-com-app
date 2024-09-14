import {styled, useColorScheme} from 'nativewind';
import React, {useMemo} from 'react';
import {SafeAreaView, Switch, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import BasicButton from '../../components/buttons/BasicButton';
import {toggleAuth} from '../../redux/slices/authSlice';

const StyledText = styled(Text);

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const {colorScheme, toggleColorScheme} = useColorScheme();

  const toggleSwitch = () => {
    toggleColorScheme();
  };

  const handleLogOut = () => {
    dispatch(toggleAuth());
  };

  const switchConfig = useMemo(
    () => ({
      trackColor: {false: '#E9EFEC', true: '#557C56'},
      thumbColor: '#C4DAD2',
      ios_backgroundColor: '#E9EFEC',
      onValueChange: toggleSwitch,
      value: colorScheme === 'dark',
    }),
    [colorScheme, toggleSwitch],
  );

  return (
    <SafeAreaView className="flex-1 dark:bg-slate-800">
      <View className="flex-1 items-center dark:bg-slate-800 p-3">
        <View className="flex flex-row items-center justify-between w-full">
          <StyledText selectable={false} className="dark:text-white">
            Enable Dark Mode
          </StyledText>
          <Switch {...switchConfig} />
        </View>
        <View className="flex flex-row items-left w-full ">
          <BasicButton onPress={handleLogOut} label={'Log Out'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
