import React, { useState } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from "react-native";
import * as Yup from "yup";

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

export default function ChangePassword({navigation}) {
  const [ispassVisibsle, setIsPassVisible] = useState(true);


  function togglePass() {
    setIsPassVisible(!ispassVisibsle)
  }
  

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.signinContainer}>
          <Image style={styles.logo} source={require("../assets/images/logo.png")} />
          <Text style={styles.signin}>Change Password</Text>
        </View>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
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
            secureTextEntry
            textContentType="password"
          />
          <AppFormField
            label="Re-enter password"
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

          <AppButton styling={{marginTop:50}} onPress={() => navigation.navigate('Success')} title="Submit" />
          <View style={styles.noAccountContainer}>
              <Text>
                Don't have an account?
              </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={styles.noAccount}>Sign up</Text>
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
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center"
  },
  signin: {
    fontSize: 25,
    color: colors.primary,
    marginBottom: 15,
    fontWeight: "bold"
  },
  signinContainer: {
    display: "flex",
    alignItems: 'center',
    justifyContent: "caches"
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
    justifyContent: "center",
    // marginHorizontal: 23,
    marginTop: 25
  },
  media: {
    width:35,
    height:35,
    justifyContent: "center",
    marginTop: 3,
    marginLeft:3,
    alignItems: "center",
    backgroundColor: colors.light,
  },
  mediaContainer: {
    width: 60,
    height:60,
    borderColor: colors.semi,
    borderWidth: 1,
    marginHorizontal: 23,

    borderRadius: 10,
    padding: 8
  },
  noAccount: {
    color: colors.primary,
    marginLeft:10,
  },
  signUp: {
    color: colors.medium,
  },
  noAccountContainer: {
    flexDirection:'row',
    justifyContent: "center",
    marginTop:10
  }
});

