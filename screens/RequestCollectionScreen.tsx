import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text,TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

function RequestCollectionScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>
        ¡Escanee los codigos de las bolsas por favor!
              </Text>
      <TouchableOpacity
          style={styles.btn}
          onPress={()=>navigation.navigate('ScannBags')}
        >
          <Text style={styles.txtBtn} >Escanear QR</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
},
title: {
      marginBottom:16,
      color:Colors.light.text,
      fontWeight:'bold',
      fontSize:18
  },
  txtBtn: {
    color: "white",
    fontWeight:'bold'
  },

  btn: {
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
    elevation: 4,
    backgroundColor:'black'
  },
});
export default RequestCollectionScreen;
