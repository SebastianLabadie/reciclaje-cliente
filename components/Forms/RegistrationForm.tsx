import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity,Animated,TouchableWithoutFeedback, ScrollView,View, Keyboard } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ModalRegistrationAddress from "../Modal/ModalRegistrationAddress";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../../constants/Colors";


function RegistrationForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    //@ts-ignore
    const address = useSelector(state=>state.auth.registerAddress);
    const [hidePass, setHidePass] = useState(true);
    const [modalVisible,setModalVisible] = useState(false)
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
        duration: 1000,
        useNativeDriver: true 
      }).start();
    };
  
    const translateYPlusIn = () => {
      Animated.timing(translateYPlusAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true 
      }).start();
    };
  
    const translateYMiunsIn = () => {
      Animated.timing(translateYMinusAnim, {
        toValue: 0,
        duration: 1000,
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
  
    const handleLogin = () => {
      dispatch({type:'SET_CURRENT_AUTH',payload:'login'})
    };
  
    const handleRegister = async ()=>{

    }

    return (
        <ScrollView style={{backgroundColor:Colors.light.background}}>
          <Animated.View style={[styles.loginFormContainer, { opacity: fadeAnim}]}>
            <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}>
              <TextInput
                style={styles.inputText}
                placeholder="Nombre y Apellido"
                placeholderTextColor="#EFEFEF"
                onChangeText={(text) => setFullName(text)}
              />
            </Animated.View>
            <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}>
              <TextInput
                style={styles.inputText}
                placeholder="Telefono"
                placeholderTextColor="#EFEFEF"
                onChangeText={(text) => setPhone(text)
                }
                keyboardType="numeric"
              />
            </Animated.View>
            <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}  >
              <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
                  <Text  style={styles.txtInputText}> {address ? address : 'Direccion'} </Text>
              </TouchableWithoutFeedback>
            </Animated.View>
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
              <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
                <Text style={styles.loginText}>Registrarse</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>Iniciar Sesion</Text>
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>

          <ModalRegistrationAddress modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
  loginFormContainer: {
    width:'100%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
    marginTop:100,
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
    marginBottom:40,
  },
  loginBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    paddingVertical:15,
    paddingHorizontal:40,
    minWidth:175,
  },
  loginText: {
    color: Colors.light.text,
  },
  txtInputText:{
    color:'white'
  },
})
export default RegistrationForm