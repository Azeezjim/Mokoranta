import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MyCourses from '../screens/MyCourses';
import Account from '../screens/Account';
import Notifications from '../screens/Notifications';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} />
  </Stack.Navigator>
);
export default FeedNavigator;
