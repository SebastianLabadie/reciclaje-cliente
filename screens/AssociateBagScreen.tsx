import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../constants/Colors";
import { SimpleLineIcons,MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {Button,Icon} from 'native-base'

function AssociateBagScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //@ts-ignore
  const bagsToAssociate: Array<any> = useSelector((state) => state.associateBag.bagsToAssociate);
  //@ts-ignore
  const userData = useSelector((state) => state.auth.userData);

  const inorganicBags = bagsToAssociate?.filter((bag) => bag.type === "inorganic").length;


  const handleScann= () =>{
    console.log('scan')
    navigation.navigate("ScannBagsAssociate")
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>
        ¡Escanee los codigos de las bolsas por favor!
      </Text>
      <Button
        startIcon={<Icon as={Ionicons} name="ios-qr-code-sharp" size={5} />}
        onPress={handleScann}
        bgColor={'black'}
        size="sm"
      
      >
       {bagsToAssociate.length == 0 ? "Escanear QR" : "Escanear Más"}
      </Button>
     

      <View style={styles.bagsToAssociateInfoContainer}>
        <View style={styles.bagToCollectInfo}>
          <SimpleLineIcons name="bag" size={36} color="yellow" />
          <Text style={styles.txtBagCount}>{0}</Text>
        </View>
        <View style={styles.bagToCollectInfo}>
          <SimpleLineIcons name="bag" size={36} color="red" />
          <Text style={styles.txtBagCount}>{inorganicBags}</Text>
        </View>
        <View style={styles.bagToCollectInfo}>
          <SimpleLineIcons name="bag" size={36} color="green" />
          <Text style={styles.txtBagCount}>{0}</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
  },
  title: {
    marginBottom: 16,
    color: Colors.light.text,
    fontWeight: "bold",
    fontSize: 18,
  },
  txtBtn: {
    color: "white",
    fontWeight: "bold",
  },

  btnQR: {
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: "black",
    marginBottom: 50,
  },
  bagsToAssociateInfoContainer: {
    marginBottom: 50,
  },
  bagToCollectInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  txtBagCount: {
    marginHorizontal: 15,
    fontWeight: "bold",
    fontSize: 16,
  },
  confirmBtnsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AssociateBagScreen;
