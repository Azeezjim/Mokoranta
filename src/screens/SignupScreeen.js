import React, { useState } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
      'Password must contain at least one special character'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('This fiel is required'),
});

export default function SignupScreen({ navigation }) {
  const [ispassVisibsle, setIsPassVisible] = useState(true);


  function togglePass() {
    setIsPassVisible(!ispassVisibsle)
  }
  return (
    <Screen >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.signinContainer}>
          <Image style={styles.logo} source={require("../assets/images/logo.png")} />
          <Text style={styles.signin}> Sign Up</Text>
        </View>
        <AppForm
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            label="Email"
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />

          <AppFormField
            label="Password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            icontwo={ispassVisibsle ? 'eye-off' : 'eye'}
            onPress={togglePass}
            ispassVisible={ispassVisibsle}
            placeholder="Password"
            textContentType="password"
          />
          <AppFormField
            label="Confirm Password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="confirmPassword"
            icontwo={ispassVisibsle ? 'eye-off' : 'eye'}
            onPress={togglePass}
            ispassVisible={ispassVisibsle}
            placeholder="Confirm Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Sign Up" />
          <Text style={styles.continue}>or Continue with</Text>
          <View style={styles.medias}>
            <View style={styles.mediaContainer}>
              <Image style={styles.media} source={require("../assets/images/facebook.png")} />
            </View>
            <View style={styles.mediaContainer}>
              <Image style={styles.media} source={require("../assets/images/google.png")} />
            </View>
            <View style={styles.mediaContainer}>
              <Image style={styles.media} source={require("../assets/images/apple.png")} />
            </View>
          </View>
          <View style={styles.noAccountContainer}>
            <Text>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.noAccount}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </AppForm>

      </ScrollView>

    </Screen>

  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 30,
    width: "100%",
    marginVertical: 60
  },
  logo: {
    width: 55,
    height: 55,
    alignSelf: "center",
    // marginTop: 20,
    marginBottom: 5,
    justifyContent: "center"
  },
  signin: {
    fontSize: 32,
    color: colors.primary,
    marginBottom: 15,
    fontWeight: "bold"
  },
  signinContainer: {
    display: "flex",
    alignItems: 'center',
    justifyContent: "caches",
    marginTop: 40
  },
  forgetPw: {
    color: colors.primary,
    display: "flex",
    alignSelf: 'flex-end',
    marginRight: "5%",
    marginBottom: 15
  },
  continue: {
    color: colors.semi,
    display: "flex",
    alignSelf: 'center',
    marginTop: 12
  },
  medias: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10
  },
  media: {
    width: 40,
    height: 40,
    backgroundColor: colors.light,
  },
  mediaContainer: {
    borderColor: colors.semi,
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    height: 60,
    width: 60
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
    marginTop: 15
  }
});

