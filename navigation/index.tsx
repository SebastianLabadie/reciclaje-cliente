
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React,{useEffect} from 'react';
import { ColorSchemeName } from 'react-native';
import { useDispatch } from 'react-redux';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import { DrawerNavigatorTabs } from './DrawerNavigatorTabs';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {


  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={ DarkTheme }>
     <DrawerNavigatorTabs />
    </NavigationContainer>
  );
}
