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
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SidebarMenu = (props: any) => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image */}
      <Image
        source={require("../assets/images/quecalvario.jpg")}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props} >
        <DrawerItemList {...props} labelStyle={{fontSize:16 }} />
        <View style={styles.customItem}></View>
      </DrawerContentScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 150,
    height: 150,
    borderRadius: 100 / 2,
    marginTop: 50,
    alignSelf: "center",
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  }
});

export default SidebarMenu;
