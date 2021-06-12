import React, { useState } from 'react'
import {View,StyleSheet,Text,TextInput, Button} from 'react-native'
import KeyboardWithDissmis from '../components/KeyboardWithDissmis/KeyboardWithDissmis'
import BagInput from '../components/Inputs/BagInput'
import Colors from '../constants/Colors'
function RequestBagsScreen() {
    const [yellowBags, setYellowBags] = useState("10")
    const [redBags, setRedBags] = useState("10")
    const [greenBags, setGreenags] = useState("10")

    return (
        <KeyboardWithDissmis>
            <View style={styles.screen} >
                <Text style={styles.title}>Digite la cantidad de bolsas</Text>
                <BagInput placeholder="Cantidad de Bolsas" bagColor="yellow" value={yellowBags} onChange={setYellowBags} />
                <BagInput placeholder="Cantidad de Bolsas" bagColor="red" value={redBags} onChange={setRedBags} />
                <BagInput placeholder="Cantidad de Bolsas" bagColor="green" value={greenBags} onChange={setGreenags} />
                <Button title="click" onPress={()=>console.log(yellowBags,redBags,greenBags)} />
            </View>
        </KeyboardWithDissmis>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:Colors.light.background
      },
      title:{
          color:Colors.light.text,
          fontSize:20,
          fontWeight:'bold',
          textDecorationLine:'underline',
          marginBottom:20
        },
     
})
export default RequestBagsScreen