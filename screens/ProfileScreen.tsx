
import * as React from "react";
import {  StyleSheet, Text } from "react-native";
import { View } from "../components/Themed";
import Colors from "../constants/Colors";


export default function ProfileScreen() {
  
  return (
    <View style={styles.screen}>
    <Text style={{color:'black'}}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:Colors.light.background
  },
});
