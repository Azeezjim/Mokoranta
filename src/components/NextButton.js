import { StyleSheet, Text, View, Animated, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, {useRef, useEffect, useContext} from 'react'
import {AntDesign } from '@expo/vector-icons';
import AuthContext from '../Global/AuthContext';


import Svg, { Circle, G } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';


export default function NextButton({scrollTo}) {
    const navigation = useNavigation();
    const {setViewedOnboarding} = useContext(AuthContext);

    const size = 80;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = (size / 2) - (strokeWidth /2);
    const circumfrence = 2 * Math.PI * radius;
    const {width} = useWindowDimensions();``

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);
  return (
    <View style={{
        flexDirection:'row', 
        justifyContent:'space-between', 
        width:'90%',
        marginVertical:10

        }}>
        <View style={styles.text}>
            <TouchableOpacity onPress={() => setViewedOnboarding(true)}> 
            <Text style={styles.text}>Skip</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.3}>
                    <AntDesign name='arrowright' size={32} color='#fff'/>
         </TouchableOpacity>
        

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    left: 0,
    bottom: 0,
    marginLeft: 0,
    marginTop: 11,
    color: "#0D9244",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#0D9422",
    borderRadius: 100,
    padding: 20,
    alignSelf: "center",
  },
});
