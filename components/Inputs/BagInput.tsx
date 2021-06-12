import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {SimpleLineIcons} from '@expo/vector-icons'
import UnderlineInput from './UnderlineInput'
import Colors from '../../constants/Colors'

function BagInput({placeholder,bagColor,onChange,value}:any) {
    return (
        <View  style={styles.bagInfoContainer} >
        <SimpleLineIcons name="bag" size={36} color={bagColor} />
        <UnderlineInput 
            style={styles.inputText}
            placeholder={placeholder}
            placeholderTextColor="#EFEFEF"
            keyboardType="numeric"
            autoCapitalize="none"
            blurOnSubmit
            onChangeText={(text:any) => onChange(text)}
            value={value}
        /> 


    </View>
    )
}


const styles = StyleSheet.create({
    bagInfoContainer:{
        flexDirection:'row',
        alignItems: "center",
        justifyContent: "center",
        marginVertical:10
      },
    inputText:{
      width: "80%",
      color:Colors.light.text,
      height: 50,
      justifyContent: "center",
      padding: 10,
      marginLeft:10,
    },
})
export default BagInput