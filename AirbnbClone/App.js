/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Router from "./src/navigation/Router";

Icon.loadFont();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
