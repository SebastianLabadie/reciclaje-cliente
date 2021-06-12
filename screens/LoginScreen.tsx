import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState } from "react";
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import {
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";


import { useDispatch } from "react-redux";
import { View } from "../components/Themed";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    console.log(email, password);

    const res = true;
    //const res = axios.post('','')

    if (res) {
      try {
        await AsyncStorage.setItem(
          "isLoged",
          JSON.stringify({ isLoged: true })
        );
        dispatch({ type: "SET_USER_STATE", payload: true });
      } catch (e) {
        console.log("error ");
      }
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View  style={styles.container} >
        <Text style={styles.logo}>Logo</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#EFEFEF"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputViewPassword}>
          <TextInput
            secureTextEntry={hidePass}
            style={styles.inputTextPassword}
            placeholder="Password..."
            placeholderTextColor="#EFEFEF"
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableWithoutFeedback
            style={{ backgroundColor: "transparent", padding: 10 }}
            onPress={() => setHidePass(!hidePass)}
          >
            <FontAwesome5
              name={hidePass ? "eye-slash" : "eye"}
              size={18}
              color="#EFEFEF"
            />
          </TouchableWithoutFeedback>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Olvidaste la contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>Iniciar Sesion</Text>
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputViewPassword: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  inputTextPassword: {
    height: 50,
    color: "white",
    flex: 1,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    padding: 20,
  },
  loginText: {
    color: "white",
  },
});
