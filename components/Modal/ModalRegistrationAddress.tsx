import React, {  useEffect, useRef, useState } from "react";
import { Button, Dimensions, Modal, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { LocationObject } from "expo-location";
import { useDispatch } from "react-redux";
import axios from "axios";

function log(eventName: any, e: any) {
  console.log(eventName, e.nativeEvent);
}


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = -34.8319446;
const LONGITUDE = -55.9690499;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function ModalRegistrationAddress({
  modalVisible,
  setModalVisible,
}: any) {
  const [location, setLocation] = useState<LocationObject>();
  const mapRef = useRef<MapView>()
  const dispatch = useDispatch()
  const [coords,setCoords] = useState({latitude:LATITUDE,longitude:LONGITUDE})

  useEffect(() => {
    if (modalVisible) {
      getCurrentLocation()
    }
  }, [modalVisible]);

  const getCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return
      }

      let location = await Location.getCurrentPositionAsync({});
      setCoords({latitude:location.coords.latitude,longitude:location.coords.longitude})

      const myMap = mapRef.current
      await animateCamera(myMap,location.coords.latitude,location.coords.longitude)

    } catch (error) {
      console.log("error: ", error);
    }
  };

  const animateCamera = async (myMap:any,lat:any,long:any) => {
    const camera = await myMap!!.getCamera();
    camera.zoom -= 0.7;
    camera.center.latitude = lat
    camera.center.longitude = long
    await myMap!!.animateCamera(camera, { duration: 1000 });
  };


  const movementMarker = (e: any) => {
    console.log("movement");
    const latitude = e.nativeEvent.coordinate.latitude;
    const longitude = e.nativeEvent.coordinate.longitude;

    let loc = location;
    loc!!.coords.latitude = latitude;
    loc!!.coords.longitude = longitude;
    setLocation(loc);
  };


  const handleConfirm = async () => {
    dispatch({type:'SET_REGISTER_GEOLOCATION',payload:`${coords.latitude},${coords.longitude}`})
    setModalVisible(false)
    /* try {
      const res = await axios.get(`https://us1.locationiq.com/v1/reverse.php?key=pk.80b5094cd9229a093d5caa600faaa573&lat=${coords.latitude}&lon=${coords.longitude}&format=json`)
      console.log('res: ',res.data)
    } catch (error) {
      console.log('peticion: ',`https://us1.locationiq.com/v1/reverse.php?key=pk.80b5094cd9229a093d5caa600faaa573&lat=${coords.latitude}&lon=${coords.longitude}&format=json`)
      console.log('error: ',error)
    }
     */ 
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.mapContainer}>
              <MapView
                //@ts-ignore
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                  latitude: LATITUDE,
                  longitude: LONGITUDE,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                }}
              >
               
                  <Marker
                    coordinate={{
                      latitude: coords.latitude,
                      longitude: coords.longitude,
                    }}
                    onSelect={(e) => log("onSelect", e)}
                    onDrag={(e) => log("onDrag", e)}
                    onDragStart={(e) => log("onDragStart", e)}
                    onDragEnd={(e) => log("onDragEnd", e)}
                    onPress={(e) => log("onPress", e)}
                    draggable
                  />
              
              </MapView>
            </View>
            <Button title="Confirmar" onPress={handleConfirm} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: "95%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  mapContainer: {
    width: "100%",
    height: "95%",
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 10,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
