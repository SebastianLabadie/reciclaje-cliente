import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback, StatusBar } from "react-native";

const IconBtn = ({children,moreStyles,onPress}:any) => {
  return (
    <TouchableNativeFeedback onPress={onPress} style={styles.buttonContainer} background={TouchableNativeFeedback.Ripple('#efefef',false,30)}>
      <View style={{...styles.btn,...moreStyles}}>
      {children}
    </View>
  </TouchableNativeFeedback>
  );
};


const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius:50,
  },
  btn:{
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius:30,
  }
});

export default IconBtn;