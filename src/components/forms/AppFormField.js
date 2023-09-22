import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
// import colors from "../../config/colors";
import defaultStyles from "../../config/styles";


function AppFormField({ label, name, ispassVisible, onPress, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        ispassVisible={ispassVisible}
        onPress={onPress}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "400",
    marginHorizontal: 20,
    color: defaultStyles.colors.black,
  }
})