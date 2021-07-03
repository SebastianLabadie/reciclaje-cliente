import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Provider, useDispatch } from 'react-redux';
import store from "./redux/store";
import ExpoNotifications from './components/Notifications/ExpoNotifications';
import {
  NativeBaseProvider,
} from "native-base"
import config from './nativebase.config';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

 

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store} >
        <NativeBaseProvider config={config}>
          <ExpoNotifications />
          <Navigation colorScheme={colorScheme} />
          <StatusBar  translucent={true}/>
        </NativeBaseProvider>
      </Provider>

    );
  }
}
