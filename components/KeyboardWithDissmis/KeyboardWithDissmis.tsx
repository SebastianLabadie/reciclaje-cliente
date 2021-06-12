import React from "react";
import {  StyleSheet,  TouchableWithoutFeedback, Keyboard } from "react-native";

function KeyboardWithDissmis({ children }: any) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      {children}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
export default KeyboardWithDissmis;
