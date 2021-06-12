import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";

function SignoutScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSignOut = async () => {
    await AsyncStorage.setItem("isLoged", JSON.stringify({ isLoged: false }));
    dispatch({ type: "SET_USER_STATE", payload: false });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.btnsContainer}>
        <TouchableOpacity style={styles.btn} onPress={handleSignOut}>
          <Text style={styles.txtBtnConfirmation}>Si</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.txtBtnConfirmation}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.background,
    padding: 10,
  },
  btnsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  txtBtnConfirmation: {
    color: "white",
    fontWeight:'bold'
  },

  btn: {
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 16,
    elevation: 4,
    backgroundColor:'black'
  },
});
export default SignoutScreen;
