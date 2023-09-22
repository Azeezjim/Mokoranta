import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import { useLoginMutation } from '../components/services/AuthData';

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

export default function LoginScreen({ navigation }) {
  const { login, data } = useLoginMutation()

  const onSubmit = async (values) => {
    try {
      const result = await login(values).unwrap()
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const [ispassVisible, setIsPassVisible] = useState(false);


  function togglePass() {
    setIsPassVisible(!ispassVisible);
  }

  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.signinContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/images/logo.png')}
          />
          <Text style={styles.signin}> Sign In</Text>
        </View>
        <AppForm
          initialValues={{ email: '', password: '' }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            label='Email'
            autoCapitalize='none'
            autoCorrect={false}
            icon='email'
            keyboardType='email-address'
            name='email'
            placeholder='Email'
            textContentType='emailAddress'
          />
          <AppFormField
            label='Password'
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            name='password'
            icontwo={ispassVisible ? 'eye-off' : 'eye'}
            onPress={togglePass}
            ispassVisible={ispassVisible}
            placeholder='Password'
            secureTextEntry
            textContentType='password'
          />
          <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
            <Text style={styles.forgetPw}> Forget Password</Text>
          </TouchableOpacity>
          <AppButton
            title='Sign In'
            onPress={() => alert('Wrong credentials')}
          />
          <Text style={styles.continue}>or Continue with</Text>
          <View style={styles.medias}>
            <View style={styles.mediaContainer}>
              <Image
                style={styles.media}
                source={require('../assets/images/facebook.png')}
              />
            </View>
            <View style={styles.mediaContainer}>
              <Image
                style={styles.media}
                source={require('../assets/images/google.png')}
              />
            </View>
            <View style={styles.mediaContainer}>
              <Image
                style={styles.media}
                source={require('../assets/images/apple.png')}
              />
            </View>
          </View>
          <View style={styles.noAccountContainer}>
            <Text>Don't have an account?</Text>
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
    width: '100%',
    marginVertical: 60,
  },
  logo: {
    width: 55,
    height: 55,
    alignSelf: 'center',
    marginTop: 0,
    marginBottom: 10,
    justifyContent: 'center',
  },
  signin: {
    fontSize: 32,
    color: colors.primary,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  signinContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'caches',
  },
  forgetPw: {
    color: colors.primary,
    display: 'flex',
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginBottom: 15,
  },
  continue: {
    color: colors.semi,
    display: 'flex',
    alignSelf: 'center',
    marginTop: 12,
  },
  medias: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
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
    width: 60,
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
    justifyContent: 'center',
    marginTop: 15,
  },
});
