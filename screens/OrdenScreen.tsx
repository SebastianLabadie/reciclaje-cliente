import { useRoute } from '@react-navigation/core'
import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import { getOrdenTpo, getStatus, getOrdenGen} from '../assets/utils'
import PagerView from 'react-native-pager-view';

type Orden={
    SDT_ORDEN: {
        ClienteNroOrd: number,
        ContratoNro: number,
        EmpresaId: number,
        MotivoOrdIngNombre: string,
        OrdCalleNom: string,
        OrdCiudadNom: string,
        OrdenGen: string,
        OrdenNro: number,
        OrdenSts: string,
        OrdenUsrIng: string,
        ClienteNombre: string,
        EmpresaNom: string,
        OrdenFIng: string,
        OrdenHIng: string
        OrdenTpo: string,
      },
}

function OrdenScreen() {
    const router = useRoute()
    const orden:Orden  = router.params?.Orden
    console.log("router params ",orden)
    return (
        <View style={styles.screen} >

        <PagerView style={{flex:1}} initialPage={0}>
            <View style={styles.infoContainer} key="1">
                <Text style={styles.title} >Información Principal</Text>
                <Text style={styles.txtAtributo}>Empresa: {orden?.SDT_ORDEN?.EmpresaNom}</Text>
                <Text style={styles.txtAtributo}>Orden Número: {orden?.SDT_ORDEN?.OrdenNro}</Text>
                <Text style={styles.txtAtributo}>Cliente: {orden?.SDT_ORDEN?.ClienteNombre}</Text>
                <Text style={styles.txtAtributo}>Orden De: {getOrdenTpo(orden?.SDT_ORDEN?.OrdenTpo)}</Text>
            </View>
            <View style={styles.infoContainer} key="2">
                <Text style={styles.title} >Motivo y Estado</Text>
                <Text style={styles.txtAtributo}>Status: {getStatus(orden?.SDT_ORDEN?.OrdenSts)}</Text>
                <Text style={styles.txtAtributo}>Contrato Nro: {orden?.SDT_ORDEN?.ContratoNro}</Text>
                <Text style={styles.txtAtributo}>Motivo de Ingreso: {orden?.SDT_ORDEN?.MotivoOrdIngNombre}</Text>
            </View>
            <View style={styles.infoContainer} key="3">
                <Text style={styles.title} >Ingreso</Text>
                <Text style={styles.txtAtributo}>Ingreso: {orden?.SDT_ORDEN?.OrdenFIng}</Text>
                <Text style={styles.txtAtributo}>Forma de Generada: {getOrdenGen(orden?.SDT_ORDEN?.OrdenGen)}</Text>
                <Text style={styles.txtAtributo}>Usuario: {orden?.SDT_ORDEN?.OrdenUsrIng}</Text>
            </View>
        </PagerView>

            {/* <View style={styles.infoContainer}>
                <Text style={styles.title} >Información Principal</Text>
                <Text style={styles.txtAtributo}>Empresa: {orden?.SDT_ORDEN?.EmpresaNom}</Text>
                <Text style={styles.txtAtributo}>Orden Número: {orden?.SDT_ORDEN?.OrdenNro}</Text>
                <Text style={styles.txtAtributo}>Cliente: {orden?.SDT_ORDEN?.ClienteNombre}</Text>
                <Text style={styles.txtAtributo}>Orden De: {getOrdenTpo(orden?.SDT_ORDEN?.OrdenTpo)}</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.title} >Motivo y Estado</Text>
                <Text style={styles.txtAtributo}>Status: {getStatus(orden?.SDT_ORDEN?.OrdenSts)}</Text>
                <Text style={styles.txtAtributo}>Contrato Nro: {orden?.SDT_ORDEN?.ContratoNro}</Text>
                <Text style={styles.txtAtributo}>Motivo de Ingreso: {orden?.SDT_ORDEN?.MotivoOrdIngNombre}</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.title} >Ingreso</Text>
                <Text style={styles.txtAtributo}>Ingreso: {orden?.SDT_ORDEN?.OrdenFIng}</Text>
                <Text style={styles.txtAtributo}>Forma de Generada: {getOrdenGen(orden?.SDT_ORDEN?.OrdenGen)}</Text>
                <Text style={styles.txtAtributo}>Usuario: {orden?.SDT_ORDEN?.OrdenUsrIng}</Text>
            </View>
             */}
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        padding:10,
        flex:1
    },
    infoContainer:{
       /*  borderRadius:15,
        borderWidth:2,
        borderColor:'white', */
        padding:10,
        marginVertical:10
    },
    title:{
        color:'white',
        fontWeight:'bold',
        fontSize:24,
/*         fontSize:18, */
        textDecorationLine:'underline',
        textDecorationStyle:'solid',
        marginBottom:8
    },
    txtAtributo:{
        color:'white',
/*         fontSize:14, */
    fontSize:18,
    },
})
export default OrdenScreen