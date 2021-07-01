import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Provider } from 'react-redux';
import store from "./redux/store";
import { ScrollView } from 'react-native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store} >
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar  translucent={true}/>
        </SafeAreaProvider>
      </Provider>

    );
  }
}
