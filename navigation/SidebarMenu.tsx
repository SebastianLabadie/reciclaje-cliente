import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";

const SidebarMenu = (props: any) => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image */}
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
      >
        <Image
          source={require("../assets/images/logoTrigenusWhite.png")}
          style={styles.trigenusLogo}
        />
        <View style={styles.houseAndNameContainer}>
          <Image
            source={require("../assets/images/house.png")}
            style={styles.houseImg}
          />
          <Text style={styles.txtHouseName}>La casa de deus</Text>
        </View>
      </LinearGradient>
      <DrawerContentScrollView {...props} >
        <DrawerItemList {...props} labelStyle={{fontSize:16 }} />
        <View style={styles.customItem}></View>
      </DrawerContentScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  trigenusLogo: {
    width: '95%',
    height: 60,
    resizeMode:'center',
    alignSelf: "center",
    marginTop:40
  },
  houseAndNameContainer:{
    alignItems:'center',
    marginTop:25,
    marginBottom:10,
  },
  houseImg:{
    width:85,
    height:85
  },
  txtHouseName:{
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  }
});

export default SidebarMenu;
