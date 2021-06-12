

import { NavigationContainer, DefaultTheme, } from '@react-navigation/native';
import React from 'react';
import { ColorSchemeName } from 'react-native';

import { DrawerNavigatorTabs } from './DrawerNavigatorTabs';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {


  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      >
     <DrawerNavigatorTabs />
    </NavigationContainer>
  );
}
