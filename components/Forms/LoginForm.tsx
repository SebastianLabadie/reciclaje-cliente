import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback,Animated } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { useDispatch, useSelector } from "react-redux";
import { URL_BASE } from "../../assets/utils";
import Colors from "../../constants/Colors";

function LoginForm() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [hidePass, setHidePass] = useState(true);
    const dispatch = useDispatch();

    //@ts-ignore
    const expoToken = useSelector(state => state.auth.expoToken)
  
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

    const resetFields = ()=>{
      setUser("")
      setPassword("")
    }
  
    const handleLogin = async () => {
      const login ={
        Usuario:user,
        Password:"1234"
      }

      try {
        const res = await axios.post(URL_BASE+'wsLoginTrigenusCliente',login)
    
        //@ts-ignore
        if (res.data.isOk) {
          resetFields()
  
          try {
            await AsyncStorage.setItem( "isLoged", JSON.stringify({ isLoged: true }));
            await AsyncStorage.setItem("userData",JSON.stringify({ userData: res.data.SDTClienteTrigenus }));
            

            checkUserExpoToken(res.data.SDTClienteTrigenus)
            dispatch({ type: "SET_USER_DATA", payload: res.data.SDTClienteTrigenus });
            dispatch({ type: "SET_USER_STATE", payload: true });

          } catch (e) {
            console.log("error ");
          }
        }else{
          alert("Error, usuario/contraseña invalidos")
        }
        
      } catch (error) {
        alert(`Error inicio sesion, ${error}`)
      }
    };
  
    const handleRegister = ()=> {
        dispatch({type:'SET_CURRENT_AUTH',payload:'register'})
    }

    const checkUserExpoToken = async (userData:any) => {
      const req = {
        EmpresaId:userData.EmpresaId,
        ClienteNro:userData.ClienteNro,
        NotificationToken:expoToken
      }
      
      try {
        const res = await axios.post(URL_BASE+'wsExpoToken002',req)
        console.log("check ",req)
        console.log("check ",res.data)

        if (!res.data.isExiste) {
          newUserExpoToken(req)
        }
      } catch (error) {
        alert(`Error check expo token, ${error}`)
      }
    }

    const newUserExpoToken = async (req:any) =>{
      try {
        const res = await axios.post(URL_BASE+'wsExpoToken001',req)
        console.log("new ",res.data)
      } catch (error) {
        alert(`Error new expo token, ${error}`)
      }
    }

    return (
        <Animated.View style={[styles.loginFormContainer, { opacity: fadeAnim}]}>
          <Animated.Image source={require('../../assets/images/LogoReciclaje.png')} style={[styles.logo,{transform:[{translateY:translateYPlusAnim}]}]} />
          <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}>
            <TextInput
              style={styles.inputText}
              placeholder="CI..."
              placeholderTextColor="#EFEFEF"
              onChangeText={(text) => setUser(text)}
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
            <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
              <Text style={styles.loginText}>Registrarse</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
    )
}


const styles = StyleSheet.create({
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
    zIndex:0
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
    marginBottom:40
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
    minWidth:175
  },
  loginText: {
    color: Colors.light.text,
  },
})
export default LoginForm