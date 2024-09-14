import {useNavigation} from '@react-navigation/native';
import {styled} from 'nativewind';
import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductPressable from '../../components/tabBarButtons/ProductPressable';
import screens from '../../constants/screens';
import {getProducts} from '../../redux/actions/itemsActions';
import Loader from '../../components/loaders/Loader';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {data = [], loading = false} = useSelector(state => state.items || {});

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, getProducts]);

  const handleOnPressItem = item => {
    navigation.navigate(screens.SECURED.PRODUCTS, {
      item,
    });
  };

  return (
    <SafeAreaView className="flex-1 dark:bg-slate-800 ">
      <ScrollView>
        <View className="p-4 flex flex-wrap flex-row items-center">
          {data.map((product, index) => (
            <ProductPressable
              key={index}
              uri={product.mainImage}
              label={product.name}
              fullObject={product}
              onPress={handleOnPressItem}
            />
          ))}
        </View>
      </ScrollView>
      <Loader visible={loading} />
    </SafeAreaView>
  );
};

export default styled(HomeScreen);
