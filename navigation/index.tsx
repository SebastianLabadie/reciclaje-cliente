

import { NavigationContainer, DefaultTheme, } from '@react-navigation/native';
import React from 'react';
import { ColorSchemeName } from 'react-native';

import { DrawerNavigatorTabs } from './DrawerNavigatorTabs';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {


  return (
    <NavigationContainer>
     <DrawerNavigatorTabs />
    </NavigationContainer>
  );
}
