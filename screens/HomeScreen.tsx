
import * as React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { View } from "../components/Themed";


export default function HomeScreen() {
  
  return (
    <View style={styles.screen}>
    <Text style={{color:'white'}}>HOME</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
