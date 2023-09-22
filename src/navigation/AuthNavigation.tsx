import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LogInScreen';
import SignupScreen from '../screens/SignupScreeen';
import { Verification } from '../screens/Verification';
import ForgetPassword from '../screens/ForgetPassword';
import ChangePassword from '../screens/ChangePassword';
import SuccessScreen from '../screens/SuccessScreen';
import Onboarding from '../screens/Onboarding';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Login' component={LoginScreen} />
    <Stack.Screen name='SignUp' component={SignupScreen} />
    <Stack.Screen name='Forget' component={ForgetPassword} />
    <Stack.Screen name='Verify' component={Verification} />
    <Stack.Screen name='ChangePassword' component={ChangePassword} />
    <Stack.Screen name='Success' component={SuccessScreen} />
    <Stack.Screen name='Onboard' component={Onboarding} />
  </Stack.Navigator>
);

export default AuthNavigator;
