import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import {View,StyleSheet,Text, TouchableOpacity} from 'react-native'
import { useDispatch } from 'react-redux';

function SignoutScreen() {

    const dispatch = useDispatch();

    const handleSignOut= async ()=>{
      await AsyncStorage.setItem("isLoged", JSON.stringify({isLoged:false}));
      dispatch({type:'SET_USER_STATE',payload:false})
    }

    
    return (
        <View style={styles.screen}> 
            <TouchableOpacity style={styles.btn} onPress={handleSignOut}>
                <Text style={styles.txtBtnConfirmation}>Si</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBtnConfirmation}>No</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    txtBtnConfirmation:{
        color:'white'
    },
    btn:{

    },
})
export default SignoutScreen