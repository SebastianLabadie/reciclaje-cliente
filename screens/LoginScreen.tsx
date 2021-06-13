import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback,Animated } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { useDispatch } from "react-redux";
import { View } from "../components/Themed";
import KeyboardWithDissmis from "../components/KeyboardWithDissmis/KeyboardWithDissmis";
import Colors from "../constants/Colors";
import WaveBG from "../components/WaveBG/WaveBG";
import { Image } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const dispatch = useDispatch();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateXAnim = useRef(new Animated.Value(300)).current;
  const translateYPlusAnim = useRef(new Animated.Value(-300)).current;
  const translateYMinusAnim = useRef(new Animated.Value(300)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true 
    }).start();
  };

  const translateXIn = () => {
    Animated.timing(translateXAnim, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true 
    }).start();
  };

  const translateYPlusIn = () => {
    Animated.timing(translateYPlusAnim, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true 
    }).start();
  };

  const translateYMiunsIn = () => {
    Animated.timing(translateYMinusAnim, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true 
    }).start();
  };

  const startAnimations = ()=>{
    fadeIn()
    translateXIn()
    translateYPlusIn()
    translateYMiunsIn()
  }

  useEffect(() => {
    startAnimations()
  }, [])

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
    <KeyboardWithDissmis>
      <View style={styles.screen}>
        <WaveBG title='¡Por un mundo Mejor!' /> 
        <Animated.View style={[styles.loginFormContainer, { opacity: fadeAnim}]}>
          <Animated.Image source={require('../assets/images/LogoReciclaje.png')} style={[styles.logo,{transform:[{translateY:translateYPlusAnim}]}]} />
          <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}>
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="#EFEFEF"
              onChangeText={(text) => setEmail(text)}
            />
          </Animated.View>
          <Animated.View style={[styles.inputViewPassword,{transform:[{translateX:translateXAnim}]}]} >
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
          </Animated.View>
          <Animated.View style={[styles.btnsContainer,{transform:[{translateY:translateYMinusAnim}]}]}>
            <TouchableOpacity>
              <Text style={styles.forgot}>Olvidaste la contraseña?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <Text style={styles.loginText}>Iniciar Sesion</Text>
            </TouchableOpacity>
          </Animated.View>
        
        </Animated.View>
      </View>
    </KeyboardWithDissmis>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
    backgroundColor: Colors.light.background,
  },
  loginFormContainer: {
    position: "absolute",
    width:'100%',
    top: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
  },
  logo: {
    width:150,
    height:160,
    marginBottom: 30,
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
  btnsContainer:{
    backgroundColor:Colors.light.background,
    justifyContent: "center",
    alignItems: "center",
  },
  forgot: {
    color: Colors.light.text,
    fontSize: 12,
  },
  loginBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    paddingVertical:15,
    paddingHorizontal:40
  },
  loginText: {
    color: Colors.light.text,
  },
});
