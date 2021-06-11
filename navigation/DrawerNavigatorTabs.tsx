

import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SidebarMenu from './SidebarMenu';
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ScannQRScreen from '../screens/ScannQRScreen';
import OrdenScreen from '../screens/OrdenScreen';
import { LinearGradient } from 'expo-linear-gradient';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props:any) => {
 
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function QRcreenStack({ navigation }:any) {
  return (
    <Stack.Navigator initialRouteName="ScannQR">
      <Stack.Screen
        name="ScannQR"
        component={ScannQRScreen}
        options={{
          title: 'Escanear QR', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerBackground: () => (
            <LinearGradient
            colors={['#667eea', '#764ba2']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          />
          ),
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
       <Stack.Screen
        name="OrdenSRV"
        component={OrdenScreen}
        options={{
          title: 'OrdenSRV', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerBackground: () => (
            <LinearGradient
            colors={['#667eea', '#764ba2']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function HomeScreenStack({ navigation }:any) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerBackground: () => (
          <LinearGradient
          colors={['#667eea', '#764ba2']}
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
        ),
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },

      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home Page', 
        }}
      />
     
    </Stack.Navigator>
  );
}


function LoginScreenStack({ navigation }:any) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerBackground: () => (
          <LinearGradient
          colors={['#667eea', '#764ba2']}
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
        ),
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>

    <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Iniciar Sesion', 
        }}
      />
     
    </Stack.Navigator>
  );
}


export function DrawerNavigatorTabs() {
  return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <SidebarMenu {...props} />}>
        <Drawer.Screen
          name="Home"
          options={{ drawerLabel: 'Home',  drawerIcon: (tabinfo) => <Feather name="log-out" size={20} color={tabinfo.color} /> }}
          component={HomeScreenStack}
        />
        <Drawer.Screen
        name="ScannQR"
        options={{ drawerLabel: 'Escanear QR',  drawerIcon: (tabinfo) => <FontAwesome name="qrcode" size={24} color={tabinfo.color} /> }}
        component={QRcreenStack}
        />
        <Drawer.Screen
        name="Login"
        options={{ drawerLabel: 'Iniciar Sesion',  drawerIcon: (tabinfo) => <MaterialCommunityIcons name="login" size={24} color={tabinfo.color} />}}
        component={LoginScreenStack}
        />
      </Drawer.Navigator>
  );
}
