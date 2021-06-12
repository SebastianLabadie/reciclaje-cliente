import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {SimpleLineIcons} from '@expo/vector-icons'
function RequestBagsScreen() {
    return (
        <View style={styles.screen} >
             <Text style={{color:'white'}}>Digite la cantidad de bolsas</Text>
             <View>
                <SimpleLineIcons name="bag" size={48} color='yellow' />
                <Text style={{color:'white'}}>Digite la cantidad de bolsas</Text>
             </View>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
})
export default RequestBagsScreen