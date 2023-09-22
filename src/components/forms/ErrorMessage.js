import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../AppText";

function ErrorMessage({ error, visible, styling }) {
  if (!visible || !error) return null;

  return <AppText style={[styles.error, styling]}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: { 
    color: "red",
    marginRight: "5%",
    marginHorizontal:20,
    fontSize:10
},
});

export default ErrorMessage;
