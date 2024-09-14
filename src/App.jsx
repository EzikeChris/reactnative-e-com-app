import React, {useMemo} from 'react';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './redux/store';

import {useColorScheme} from 'nativewind';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigation from './navigation/RootNavigation';

const ThemedStatusBar = () => {
  const {colorScheme} = useColorScheme();
  const configStatusBar = useMemo(
    () => ({
      barStyle: colorScheme === 'dark' ? 'light-content' : 'dark-content',
      backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
    }),
    [colorScheme],
  );
  return <StatusBar {...configStatusBar} />;
};

const App = () => {
  return (
    <GestureHandlerRootView className="flex-1">
      <Provider store={store}>
        <ThemedStatusBar />
        <RootNavigation />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
