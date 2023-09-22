import React, { useState } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import * as Yup from "yup";
import LottieView from "lottie-react-native";


import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

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
});

export default function SuccessScreen({ navigation }) {
  const [ispassVisibsle, setIsPassVisible] = useState(true);


  function togglePass() {
    setIsPassVisible(!ispassVisibsle)
  }

  return (
    <Screen >
      <View style={styles.signinContainer}>
        <Image style={styles.logo} source={require("../assets/images/logo.png")} />
        <Text style={styles.signin}>Password reset</Text>
      </View>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View>
          <Image style={styles.imageView} source={require("../assets/images/success.png")} autoPlay loop />
        </View>
        <Text style={styles.success}>Successfully</Text>
        <AppButton onPress={() => navigation.popToTop()} title="Succes" />
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
    padding: 30,
    width: "100%",
    marginVertical: 80
  },
  logo: {
    width: 55,
    height: 55,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 10,
    justifyContent: "center"
  },
  success: {
    fontSize: 25,
    color: colors.primary,
    // marginBottom: 20,
    fontWeight: "bold",
    alignSelf: "center",
    // marginTop: 0,
    marginVertical: 15,
    justifyContent: "center"
  },
  signin: {
    fontSize: 32,
    color: colors.primary,
    marginBottom: 15,
    fontWeight: "bold"
  },
  imageView: {
    width: 128,
    height: 128,
    alignSelf: "center",
    justifyContent: "center"
  },
  signinContainer: {
    display: "flex",
    alignItems: 'center',
    justifyContent: "caches",
    marginVertical: 40

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
    justifyContent: "space-around",
    marginTop: 25
  },
  media: {
    width: 35,
    height: 35,
    backgroundColor: colors.light,
  },
  facebook: {
    width: 40,
    height: 40,
    backgroundColor: colors.light,
  },
  mediaCintainer: {
    width: 70,
    height: 70,
    borderColor: colors.semi,
    borderWidth: 1,
    borderRadius: 10,
    padding: 8
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