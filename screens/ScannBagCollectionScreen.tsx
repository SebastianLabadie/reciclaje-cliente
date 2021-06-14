import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, Vibration } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";
import ModalTel from "../components/Modal/ModalTel";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";

function ScannBagsCollectinScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch()

  const ONE_SECOND_IN_MS = 1000;

  const getBagData = async ({}:any) => {
   
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    Vibration.vibrate(0.2 * ONE_SECOND_IN_MS);
    
   /*  getOrden(JSON.parse(data)); */
   
    setScanned(true);
    setData(data);
    setType(type);
    setModalVisible(true);
    alert(`Este es el tipo ${type} este es la data: ${data}`)
    const bag = JSON.parse(data)
    dispatch({type:'ADD_BAG_TO_COLLECT',payload:bag}) 
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleScaned = () => {
    setModalVisible(false);
    setScanned(false);
  };
  return (
    <View style={styles.screen}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
      </BarCodeScanner>
       {scanned ? <Button title={'Aprieta para escanear devuelta!'} onPress={handleScaned} /> : null} 


     
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
  },
});
export default ScannBagsCollectinScreen;
