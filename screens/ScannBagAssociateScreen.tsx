import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, Vibration } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import {
  useToast,
  VStack,
} from "native-base"
import { URL_BASE } from "../assets/utils";

function ScannBagsAssociateScreen() {
  const toast = useToast()
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  //@ts-ignore
  const userData = useSelector((state) => state.auth.userData);

  const dispatch = useDispatch()

  const ONE_SECOND_IN_MS = 1000;

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    Vibration.vibrate(0.2 * ONE_SECOND_IN_MS);
    
    const bag = JSON.parse(data)
    
    handleAssociate(bag)
    setScanned(true);

    
    dispatch({type:'ADD_BAG_TO_ASSOCIATE',payload:bag}) 
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleScaned = () => {
    setScanned(false);
  };

  
  const handleAssociate = async (bag:any) =>{

      //luego hay que ver el tipo de bolsa para ver que articuloid se manda

      const bagData = {
        EmpresaId : userData.EmpresaId,
        ArticuloId : 1,
        ArticuloSerie : bag.serie,
        ArticuloSts : "C",
        ArticuloCnd : "N",
        ArticuloUsrIng : userData.ClienteUsrIng,
        CentroStkId : 0,
        ClienteNro: userData.ClienteNro,
        ArticuloPropiedad : "C",
        ArticuloCuarentena : true
      }

      const res = await axios.post(URL_BASE+'wsAltaArticuloSerie',bagData)

      if (res.data.ErrCod == 2000) {
        toast.show({
          title: "Succes",
          status: "success",
          description: "Bolsa asociada con exito",
          duration:7000,
          placement: "top",
          marginTop:20
        })
      }else{
        toast.show({
          title: "Error",
          status: "error",
          description: `${res.data.ErrCod} - ${res.data.Gx_emsg}`,
          duration:7000,
          placement: "top",
          marginTop:20
        })
      }

}

  return (
    
    <View style={styles.screen}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject,{backgroundColor:'black'}]}
      >
        <BarcodeMask  edgeColor="#62B1F6" showAnimatedLine />
      </BarCodeScanner>
       {scanned ? <Button title={'Aprieta para escanear devuelta!'} onPress={handleScaned} /> : null} 


     
    </View>
  );

}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%"
  },
});
export default ScannBagsAssociateScreen;
