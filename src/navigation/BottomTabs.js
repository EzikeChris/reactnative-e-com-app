import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useColorScheme} from 'nativewind';
import {Home, Settings, ShoppingBag} from 'react-native-feather';

import TabBarIcon from '../components/tabBarButtons/TabBarIcon';
import screens from '../constants/screens';
import CartScreen from '../screens/secured/CartScreen';
import HomeScreen from '../screens/secured/HomeScreen';
import SettingsScreen from '../screens/secured/SettingsScreen';
import {COLORS} from '../constants/colors';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const {colorScheme} = useColorScheme();

  const styles = {
    dark: {
      backgroundColor: COLORS.PRIMARY_BLACK,
      borderTopWidth: 0,
    },
    light: {
      borderTopWidth: 0,
      backgroundColor: COLORS.PRIMARY_GRAY,
    },
  };

  const containerStyles = {
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
      ...styles[colorScheme],
      height: 70,
      margin: 0,
      paddingBottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 0,
    },
  };

  const screenDetails = [
    {
      name: screens.SECURED.HOME,
      component: HomeScreen,
      options: {
        headerShown: false,
        tabBarButton: ({accessibilityState, onPress}) => (
          <TabBarIcon
            {...{
              icon: Home,
              selected: accessibilityState.selected,
              onPress,
            }}
          />
        ),
      },
    },
    {
      name: screens.SECURED.CART,
      component: CartScreen,
      options: {
        headerShown: false,
        tabBarButton: ({accessibilityState, onPress}) => (
          <TabBarIcon
            {...{
              icon: ShoppingBag,
              selected: accessibilityState.selected,
              onPress,
            }}
          />
        ),
      },
    },
    {
      name: screens.SECURED.SETTINGS,
      component: SettingsScreen,
      options: {
        headerShown: false,
        tabBarButton: ({accessibilityState, onPress}) => (
          <TabBarIcon
            {...{
              icon: Settings,
              selected: accessibilityState.selected,
              onPress,
            }}
          />
        ),
      },
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName={screens.SECURED.HOME}
      screenOptions={containerStyles}>
      {screenDetails.map(({name, component, options}, index) => (
        <Tab.Screen
          name={name}
          component={component}
          options={options}
          key={index}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigation;
