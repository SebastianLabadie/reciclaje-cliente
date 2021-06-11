import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, Vibration } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";
import ModalTel from "../components/Modal/ModalTel";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";

function ScannQRScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState("");
  const [type, setType] = useState("");
  const navigation = useNavigation()

  const ONE_SECOND_IN_MS = 1000;

  const getOrden = async ({EmpresaId,OrdenNro,ClienteNroOrd}:any) => {
    console.log(`params ${EmpresaId} ${OrdenNro} ${ClienteNroOrd}`)

    const res = await axios.post(
      "http://10.200.5.20:8080/SIGA-SC/rest/pTestGetOrdenes",
      {
        EmpresaId,
        OrdenNro,
        ClienteNroOrd
      }
    );

    console.log("data: ",res.data);
    navigation.navigate('OrdenSRV',{Orden:res.data})
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    Vibration.vibrate(0.2 * ONE_SECOND_IN_MS);
    
    getOrden(JSON.parse(data));
   
    setScanned(true);
    setData(data);
    setType(type);
    setModalVisible(true);
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
      <Text>Escaneo de QR</Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
      </BarCodeScanner>
      {scanned ? <Button title={'Aprieta para escanear devuelta!'} onPress={handleScaned} /> : null}
{/*       <ModalTel
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={data}
        type={type}
        handleScaned={handleScaned}
      ></ModalTel> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
  },
});
export default ScannQRScreen;
