import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity,Animated,TouchableWithoutFeedback, ScrollView,View, Keyboard, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ModalRegistrationAddress from "../Modal/ModalRegistrationAddress";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import {Picker} from '@react-native-picker/picker';
import { Dimensions } from "react-native";
//@ts-ignore
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { URL_BASE } from "../../assets/utils";

const splice = function(idx:number, rem:number,mys:string, str:string) {
  return mys.slice(0, idx) + str + mys.slice(idx + Math.abs(rem));
};


function RegistrationForm() {
    const [ci, setCI] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [localidad, setLocalidad] = useState("");
    const [padron, setPadron] = useState("");
    const [municipalCode, setMunicipalCode] = useState("");
    const [people, setPeople] = useState(0);
    const [step, setStep] = useState(0);
    let progressStep = 0
    //@ts-ignore
    const geoLocation = useSelector(state=>state.auth.registerGeolocation);
    const [hidePass, setHidePass] = useState(true);
    const [modalVisible,setModalVisible] = useState(false)
    const dispatch = useDispatch();
    const [age1, setAge1] = useState("");
    const [age2, setAge2] = useState("");
    const [age3, setAge3] = useState("");
    const [age4, setAge4] = useState("");
    const [age5, setAge5] = useState("");
  
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateXAnim = useRef(new Animated.Value(300)).current;
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
      translateYMiunsIn()
    }
  
    useEffect(() => {
      startAnimations()
    }, [])
  
    const handleLogin = () => {
      dispatch({type:'SET_CURRENT_AUTH',payload:'login'})
    };
  
    const handleRegister = async ()=>{
      const edades = []
      {people >= 1 ? edades.push(age1) : null }
      {people >= 2 ? edades.push(age2) : null }
      {people >= 3 ? edades.push(age3) : null }
      {people >= 4 ? edades.push(age4) : null }
      const cliente = {
        Usuario:ci,
        Password:password,
        Empresa:23,
        ClienteNom:fullName.split(" ")[0],
        ClienteApe:fullName.split(" ")[1],
        ClienteCI:splice(-1,0,ci,"-"),
        ClienteFchNac:"2001-06-03",
        ClienteCel:phone,
        ClienteEmail:email,
        CliCalUbicacion:address,
        Latitud:geoLocation.split(",")[1],
        Longitud:geoLocation.split(",")[0],
        SDTPersonasEnHogar:{
          CantidadDePersonasEnH:people,
          Edades:[...edades]
        },
        Padron:padron,
        codMunicipal:municipalCode,
        Localidad:localidad
      }
 
      console.log('Cliente Ingresando: ',cliente)

      try {
        const res = await axios.post(URL_BASE+'wsClienteIngresar_rest',cliente)
        
        if (res.data.CodigoRet == 2000) {
            alert("Registrado con exito.")
            resetFields()
        }else{
            alert("Hubo un problema con los datos enviados.")
            console.log(res.data)
        }
      } catch (error) {
          console.log("error: ",error)
      }
    }

    
    const progressOnNext  = () =>{
      setStep(step+1)
    }

    const progressOnPrev  = () =>{
      setStep(step-1)
    }

    const resetFields = () =>{
      setCI("")
      setEmail("")
      setPassword("")
      setFullName("")
      setPhone("")
      setAddress("")
      setLocalidad("")
      setPadron("")
      setMunicipalCode("")
      setPeople(0)
      dispatch({type:'SET_REGISTER_GEOLOCATION',payload:false})
      setStep(0)
      setAge1("")
      setAge2("")
      setAge3("")
      setAge4("")
      setAge5("")

    }
    return (

        <ScrollView style={{backgroundColor:Colors.light.background,flex:1,paddingTop:20}}>
          <ProgressSteps>
              <ProgressStep label="Datos Personales" nextBtnText='Siguiente' onPrevious={progressOnPrev} onNext={progressOnNext} nextBtnTextStyle={styles.btnStep} previousBtnTextStyle={styles.btnStep}>
                <Animated.View style={[styles.formContainer, { opacity: fadeAnim}]}>
                  <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}>
                    <TextInput
                      style={styles.inputText}
                      placeholder="Cédula"
                      placeholderTextColor="#EFEFEF"
                      onChangeText={(text) => setCI(text)
                      }
                      value={ci}
                      keyboardType="numeric"
                      maxLength = {8}
                    />
                  </Animated.View>
                  <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}>
                    <TextInput
                      style={styles.inputText}
                      placeholder="Nombre y Apellido"
                      placeholderTextColor="#EFEFEF"
                      onChangeText={(text) => setFullName(text)}
                      value={fullName}
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
                      maxLength={9}
                      value={phone}
                    />
                  </Animated.View>
                  <Animated.View style={[styles.pickerPeople,{transform:[{translateX:translateXAnim}]}]} >
                      <Picker
                        mode="dialog"
                        selectedValue={people}
                        onValueChange={(v) => setPeople(v)}
                        /*  prompt="Cantidad de personas" */
                        style={{marginLeft:10,color:'white'}}
                        dropdownIconColor={'white'}
                      >
                      <Picker.Item label="Cantidad de personas en hogar" value={0} />
                      <Picker.Item label="1" value={1} />
                      <Picker.Item label="2" value={2}/>
                      <Picker.Item label="3" value={3}/>
                      <Picker.Item label="4" value={4}/>
                    </Picker>
                  </Animated.View>

                  {/* EDADES */}
                  {people >= 1 ? (
                    <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}>
                      <TextInput
                        style={styles.inputText}
                        placeholder="Edad1"
                        placeholderTextColor="#EFEFEF"
                        onChangeText={(text) => setAge1(text)
                        }
                        keyboardType="numeric"
                        maxLength={3}
                        value={age1}
                      />
                  </Animated.View>
                  ) : null } 
                 {people >= 2 ? (
                    <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}>
                      <TextInput
                        style={styles.inputText}
                        placeholder="Edad2"
                        placeholderTextColor="#EFEFEF"
                        onChangeText={(text) => setAge2(text)
                        }
                        keyboardType="numeric"
                        maxLength={3}
                        value={age2}
                      />
                  </Animated.View>
                  ) : null }
                  {people >= 3 ? (
                    <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}>
                      <TextInput
                        style={styles.inputText}
                        placeholder="Edad3"
                        placeholderTextColor="#EFEFEF"
                        onChangeText={(text) => setAge3(text)
                        }
                        keyboardType="numeric"
                        maxLength={3}
                        value={age3}
                      />
                  </Animated.View>
                  ) : null }
                  {people >= 4 ? (
                    <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}>
                      <TextInput
                        style={styles.inputText}
                        placeholder="Edad4"
                        placeholderTextColor="#EFEFEF"
                        onChangeText={(text) => setAge4(text)
                        }
                        keyboardType="numeric"
                        maxLength={3}
                        value={age4}
                      />
                  </Animated.View>
                  ) : null }
                  
                  
                </Animated.View>
              </ProgressStep>
              <ProgressStep label="Direccion" previousBtnText='Anterior' nextBtnText='Siguiente' onPrevious={progressOnPrev} onNext={progressOnNext} nextBtnTextStyle={styles.btnStep} previousBtnTextStyle={styles.btnStep}>
                <Animated.View style={[styles.formContainer, { opacity: fadeAnim}]}>
                    <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}>
                    <TextInput
                      style={styles.inputText}
                      placeholder="Dirección"
                      placeholderTextColor="#EFEFEF"
                      onChangeText={(text) => setAddress(text)}
                      autoCapitalize = 'none'
                      value={address}
                    />
                  </Animated.View>
                  <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}  >
                    <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
                        <Text  style={styles.txtInputText}> {geoLocation ? geoLocation : 'Geoposicion'} </Text>
                    </TouchableWithoutFeedback>
                  </Animated.View>
                  <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}>
                    <TextInput
                      style={styles.inputText}
                      placeholder="Localidad"
                      placeholderTextColor="#EFEFEF"
                      onChangeText={(text) => setLocalidad(text)}
                      value={localidad}
                      autoCapitalize = 'none'
                    />
                  </Animated.View>
                  <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}>
                    <TextInput
                      style={styles.inputText}
                      placeholder="Padron"
                      placeholderTextColor="#EFEFEF"
                      onChangeText={(text) => setPadron(text)}
                      keyboardType="numeric"
                      value={padron}
                    />
                  </Animated.View>
                  <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}>
                    <TextInput
                      style={styles.inputText}
                      placeholder="Código Municipal"
                      placeholderTextColor="#EFEFEF"
                      keyboardType="numeric"
                      onChangeText={(text) => setMunicipalCode(text)}
                      value={municipalCode}
                    />
                  </Animated.View>
                </Animated.View>
              </ProgressStep>
              <ProgressStep label="Datos De cuenta"  previousBtnText='Anterior' finishBtnText=''  onPrevious={progressOnPrev}  previousBtnTextStyle={styles.btnStep}>
                <Animated.View style={[styles.formContainer, { opacity: fadeAnim}]}>
                    
                  <Animated.View style={[styles.inputView,{transform:[{translateX:translateXAnim}]}]}>
                    <TextInput
                      style={styles.inputText}
                      placeholder="Email..."
                      placeholderTextColor="#EFEFEF"
                      onChangeText={(text) => setEmail(text)}
                      value={email}
                      autoCapitalize = 'none'
                    />
                  </Animated.View>
                  <Animated.View style={[styles.inputViewPassword,{transform:[{translateX:translateXAnim}]}]} >
                    <TextInput
                      secureTextEntry={hidePass}
                      style={styles.inputTextPassword}
                      placeholder="Password..."
                      placeholderTextColor="#EFEFEF"
                      onChangeText={(text) => setPassword(text)}
                      value={password}
                      autoCapitalize = 'none'
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
                </Animated.View>
              </ProgressStep>
          </ProgressSteps>

          <Animated.View style={[styles.authBtnsContainer, { opacity: fadeAnim}]}>
            <Animated.View style={[styles.btnsContainer,{transform:[{translateY:translateYMinusAnim}]}]}>
              <TouchableOpacity>
                <Text style={styles.forgot}>Olvidaste la contraseña?</Text>
              </TouchableOpacity>
              {step == 2 ?  <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
                <Text style={styles.loginText}>Registrarse</Text>
              </TouchableOpacity> : null}
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
  formContainer: {
    width:Dimensions.get('window').width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
    marginTop:10,
    /* marginBottom:10, */
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
  pickerPeople:{width:'80%',
    alignContent:'center',
    alignSelf:'center',
    backgroundColor: "#465881",
    marginBottom:20,
    borderRadius:25
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
    marginBottom:30,
  },
  authBtnsContainer:{
    width:Dimensions.get('window').width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
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
  btnStep:{
    fontSize:16,
    
  },
  btnStepNext:{
    backgroundColor: Colors.primary, 
    borderRadius: 35,
    paddingVertical:12,
    paddingHorizontal:40,
    fontSize:14,
    color:'#000',
    
  },
})
export default RegistrationForm