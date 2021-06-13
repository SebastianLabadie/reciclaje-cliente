import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
var markers = [
  {
    latitude: -34.9003015988709,
    longitude: -56.16171287449369,
    title: "Punto de Reciclaje 1",
    subtitle: "Avenida 1234",
  },
  {
    latitude: -34.89672177914575,
    longitude:  -56.16145870318817,
    title: "Punto de Reciclaje 2",
    subtitle: "Avenida 1234",
  },
  {
    latitude: -34.894827466359004,
    longitude:  -56.14543591678148,
    title: "Punto de Reciclaje 3",
    subtitle: "Avenida 1234",
  },
  {
    latitude: -34.88417114301336, 
    longitude: -56.178347586157386,
    title: "Punto de Reciclaje 4",
    subtitle: "Avenida 1234",
  },
];

function CollectionPointsScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -34.8918538916433,
          longitude: -56.16171287449369,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker,i) => (
          <Marker
            key={i}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.subtitle}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
export default CollectionPointsScreen;
