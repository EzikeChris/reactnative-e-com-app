import {styled} from 'nativewind';
import React from 'react';
import {View} from 'react-native';
import {Lock} from 'react-native-feather';
import {useDispatch} from 'react-redux';
import BasicButton from '../../components/buttons/BasicButton';
import {toggleAuth} from '../../redux/slices/authSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handlerLogIn = () => {
    dispatch(toggleAuth());
  };
  return (
    <View className="flex-1 items-center justify-center dark:bg-slate-800">
      <BasicButton icon={Lock} label={'Log In'} onPress={handlerLogIn} />
    </View>
  );
};

export default styled(LoginScreen);
