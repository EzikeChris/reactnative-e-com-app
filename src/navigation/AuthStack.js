import {createStackNavigator} from '@react-navigation/stack';
import screens from '../constants/screens';
import LoginScreen from '../screens/auth/LoginScreen';

const AuthStack = createStackNavigator();

export default () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={screens.AUTH.LOGIN}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};
