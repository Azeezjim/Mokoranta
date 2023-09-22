import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MyCourses from "../screens/MyCourses";
import Account from '../screens/Account'
import Notifications from "../screens/Notifications";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FeedNavigator from './FeedNavigation';


const Tab = createBottomTabNavigator();


const AppNavigator = () => (
    <Tab.Navigator 
    screenOptions={{headerShown:false}}
    >
        <Tab.Screen  
        name="Feed" 
        component={FeedNavigator}
        options={{tabBarIcon:({size, color}) => <MaterialCommunityIcons name="home-outline" size={size} color={color}/>}}
        />
        <Tab.Screen  
        name="MyCourses" 
        component={MyCourses}
        options={{tabBarIcon:({size, color}) => <MaterialCommunityIcons name="book-account" size={size} color={color}/>}}

        />
        <Tab.Screen  
        name="Notification" 
        component={Notifications}
        options={{tabBarIcon:({size, color}) => <MaterialCommunityIcons name="bell-badge" size={size} color={color}/>}}

        
        />
        <Tab.Screen  
        name="Account" 
        component={Account}
        options={{tabBarIcon:({size, color}) => <MaterialCommunityIcons name="account" size={size} color={color}/>}}

        />
    </Tab.Navigator>
)
export default AppNavigator;