import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

import { useSelector } from "react-redux";
import KeyboardWithDissmis from "../components/KeyboardWithDissmis/KeyboardWithDissmis";
import Colors from "../constants/Colors";
import WaveBG from "../components/WaveBG/WaveBG";
import LoginForm from "../components/Forms/LoginForm";
import RegistrationForm from "../components/Forms/RegistrationForm";
import {View} from 'react-native'

export default function AuthScreen() {
  //@ts-ignore
  const currentAuth = useSelector((state) => state.auth.currentAuth);

  return (
    <KeyboardWithDissmis>
      <View  style={styles.screen}>
        {currentAuth === "login" ?  <WaveBG title="¡Por un mundo Mejor!" /> : null}
        {currentAuth === "login" ? <LoginForm /> : <RegistrationForm />}
      </View>
    </KeyboardWithDissmis>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
    backgroundColor: Colors.light.background,
  },
});
