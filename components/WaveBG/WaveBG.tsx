import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import Colors from "../../constants/Colors";
function WaveBG({title}:any) {
  return (
    <View>
      <View style={styles.viewAbove} >
        <Text style={styles.title}>{title}</Text>
      </View>
      <Svg height="50%" width="100%" viewBox="0 0 1440 320" style={styles.svg}>
        <Path
          fill="#6DFF6E"
          d="M0,160L60,181.3C120,203,240,245,360,261.3C480,277,600,267,720,224C840,181,960,107,1080,106.7C1200,107,1320,181,1380,218.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></Path>
      </Svg>
      
    </View>
  );
}

const styles = StyleSheet.create({
  viewAbove: {
    backgroundColor: "#6DFF6E",
    height: 200,
    alignItems:'center'
  },
  title:{
    position:'absolute',
    bottom:50,
    fontSize:22,
    color:'white',
    fontWeight:'bold'
  },
  svg: {
    position: "absolute",
    top: 190,
  },
});
export default WaveBG;
