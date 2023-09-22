import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'

export default function CourseComponent({
    courseImage, 
    courseTitle,
    courseTag,
    tutorImage,
    tutorName,
    duration,
    numOfLesson,
    styling

}) {
  return (
    <TouchableWithoutFeedback style={styles.courses}>
    <View style={[styles.courses, styling]}>
        <Image
        source={courseImage}
        style={styles.image}
        resizeMode='cover'
        />
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:12, marginVertical:3}}>
          <Text style={styles.courseName} >{courseTitle}</Text>
          <Text style={styles.courseTag}>{courseTag}</Text>
        </View>
          <View style={{flexDirection:'row', marginHorizontal:12, marginVertical:6 }}>
          <Image
           source={tutorImage}
           style={{width:30, height:30, position:'relative', resizeMode:'cover', borderRadius:15, flexShrink:0}}
          />
          <Text style={styles.tutor}>{tutorName}</Text>
        </View>
        <Text style={styles.duration}>{duration} <Text>*{numOfLesson}</Text></Text>


    </View>
</TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    courses:{
        backgroundColor:'#fff',
        width: 200,
        height: 220,
        borderWidth:0.23,
        borderColor:'#404040',
        flexShrink:0,
        borderRadius:10,
        shadowOffset:{width:29, height:600},
        shadowOpacity:1,
        // elevation:-1,
        shadowColor:'red',
        // textShadowColor:'blue'
    
      },
      image:{
        width:180,
        height:120,
        flexShrink:0,
        alignSelf:'center',
        marginHorizontal:100,
        borderRadius:8,
        marginTop:7
      },
      courseName:{
        fontSize:10,
        fontWeight:'700',
        color:'#404040',
        // fontFamily:'Avenir'
      },
      courseTag:{
        fontSize:10,
        color:'#0D9422',
        fontWeight:'700',
    
      },
      tutor:{
        color: '#404040',
        fontSize: 10,
        fontWeight: '400',   
        marginHorizontal:3,
        marginVertical:5
      },
      duration:{
        color: '#404040',
        fontSize: 10,
        fontWeight: '400',   
        marginHorizontal:10,
        marginVertical:5
    
      }
})