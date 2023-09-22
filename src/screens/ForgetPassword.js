import React, { useState } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField } from "../components/forms";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),

});

export default function ForgetPassword({ navigation }) {
  const [ispassVisibsle, setIsPassVisible] = useState(true);


  function togglePass() {
    setIsPassVisible(!ispassVisibsle)
  }

  return (
    <Screen >
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/images/logo.png")} />
        <Text style={styles.signin}>Forget Password </Text>
      </View>
      <AppForm
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="email"
          onPress={togglePass}
          ispassVisible={ispassVisibsle}
          placeholder="Enter your email"
          secureTextEntry
          textContentType="password"
        />
        <AppButton onPress={() => navigation.navigate('ChangePassword')} styling={styles.button} title="Send Email" />
        <View style={styles.noAccountContainer}>
          <Text>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.noAccount}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </AppForm>
    </Screen>

  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80
  },
  logo: {
    width: 55,
    height: 55,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center"
  },
  signin: {
    fontSize: 25,
    color: colors.primary,
    marginBottom: 35,
    fontWeight: "bold"
  },
  signinContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 80
  },

  button: {
    marginTop: 50
  },

  noAccount: {
    color: colors.primary,
    marginLeft: 10,
  },
  signUp: {
    color: colors.medium,
  },
  noAccountContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    marginTop: 8
  }
});
