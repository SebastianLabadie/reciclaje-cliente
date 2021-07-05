import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, Vibration } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";
import axios from "axios";
import { useDispatch } from "react-redux";
import { URL_BASE } from "../assets/utils";
import { useToast } from "native-base";

function ScannBagsCollectionScreen() {
  const toast = useToast();
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch();

  //@ts-ignore
  const userData = useSelector((state) => state.auth.userData);

  const ONE_SECOND_IN_MS = 1000;

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    Vibration.vibrate(0.2 * ONE_SECOND_IN_MS);

    setScanned(true);
    const bag = JSON.parse(data);
    handleCollect(bag);
    dispatch({ type: "ADD_BAG_TO_COLLECT", payload: bag });
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

  const handleCollect = async (bag: any) => {
    //luego hay que ver el tipo de bolsa para ver que articuloid se manda

    const bags = {
      EmpresaId: userData.EmpresaId,
      ClienteNroOrd: userData.ClienteNro,
      OrdenUsrIng: userData.ClienteUsrIng,
      ArticuloId: 1,
      ArticuloSerie: bag.serie,
    };

    try {
      const res = await axios.post(`${URL_BASE}pComTrigenius001`, bags);

      if (res.data.ErrCod == 2000) {
        toast.show({
          title: "Succes",
          status: "success",
          description: "Orden creada con exito.",
          duration: 7000,
          placement: "top",
          marginTop: 20,
        });
      } else {
        toast.show({
          title: "Error",
          status: "error",
          description: `${res.data.ErrCod} - ${res.data.Gx_emsg}`,
          duration: 7000,
          placement: "top",
          marginTop: 20,
        });
      }
    } catch (error) {
      toast.show({
        title: "Error",
        status: "error",
        description: `pComTrigenius001 error - ${error}`,
        duration: 7000,
        placement: "top",
        marginTop: 20,
      });
    }
  };

  return (
    <View style={styles.screen}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
      </BarCodeScanner>
      {scanned ? ( <Button title={"Aprieta para escanear devuelta!"}  onPress={handleScaned} /> ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
  },
});
export default ScannBagsCollectionScreen;
