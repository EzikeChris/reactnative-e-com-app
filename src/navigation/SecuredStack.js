import {createStackNavigator} from '@react-navigation/stack';
import {useColorScheme} from 'nativewind';
import {useMemo} from 'react';
import {COLORS} from '../constants/colors';
import screens from '../constants/screens';
import ProductScreen from '../screens/secured/ProductScreen';
import BottomNavigation from './BottomTabs';

const SecuredStack = createStackNavigator();

export default () => {
  const {colorScheme} = useColorScheme();
  const styledHeaderConfig = useMemo(
    () => ({
      headerTintColor:
        colorScheme === 'dark' ? COLORS.PRIMARY_WHITE : COLORS.PRIMARY_BLACK,
      headerStyle: {
        backgroundColor:
          colorScheme === 'dark' ? COLORS.PRIMARY_BLACK : COLORS.PRIMARY_WHITE,
      },
    }),
    [colorScheme],
  );
  return (
    <SecuredStack.Navigator>
      <SecuredStack.Screen
        name={screens.SECURED.BOTTOM_TABS}
        component={BottomNavigation}
        options={{
          headerShown: false,
        }}
      />
      <SecuredStack.Screen
        name={screens.SECURED.PRODUCTS}
        component={ProductScreen}
        options={styledHeaderConfig}
      />
    </SecuredStack.Navigator>
  );
};
