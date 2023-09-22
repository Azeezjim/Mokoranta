import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Screen from '../components/Screen'
import { Avatar, SearchBar } from '@rneui/themed'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { ListItem } from '../components/Listitem'
// import CourseComponent from '../components/CourseComponent'
// import categoriesData from '../components/categoriesData'
import { courses } from '../components/coursesData'

export default function Home() {
    const [search, setSearch]  = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <Screen>
        <ScrollView style={styles.container}showsVerticalScrollIndicator={false}>
            <View className='flex-row justify-between' style={{marginLeft:10}}>
                   
                    <View className='mx-3'>
                        <Text style={{fontSize:10, fontWeight:'400'}}>Welcome</Text>
                        <Text style={{fontWeight:'700', fontSize:16}} >Ali Garba</Text>
                
                </View>
                <View className='flex-row mx-3'>
                    <MaterialCommunityIcons name='bell-badge-outline' size={30} color='#0d9422' style={{marginTop:7, marginHorizontal:10}} />
                    <Avatar 
                        size={55}
                        rounded
                        source={{uri:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
                    />
                </View>
            </View>
            {/* <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:10}}>
                <SearchBar
                value={search}
                placeholder='Search any course'
                lightTheme
                showCancel
                round
                clearIcon
                containerStyle={{
                  borderRadius:21.5, 
                  backgroundColor:'transparent',
                  borderWidth:0,
                  borderTopWidth:0,
                  borderBottomWidth:0,
                  width:'80%'

                }}
                inputContainerStyle={{
                  backgroundColor:'rgba(0,0,0,0.1)',
                  borderRadius:21.5
                }}
                />
                <TouchableOpacity style={styles.settings}>
                     <MaterialCommunityIcons name='tune-variant' size={33} color='#0d9422'  />
                </TouchableOpacity>

            </View> */}
            <View>
              {/* <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={2}
              style={styles.chipScrollview}
              >
                {categoriesData.map((e,index) => (

                  <TouchableOpacity onPress={() => setCurrentIndex(index)} style={
                    [styles.chipItem, {
                      backgroundColor:currentIndex === index ? '#4ECB71' : '#fff'
                    }]
                    } key={index}>
                      <Text 
                      style={{alignSelf:'center', 
                      color:currentIndex === index ? '#fff' :'#C7C9CD',
                      fontWeight:currentIndex === index ?'700' : '500' 
                      
                      }}>{e.name}</Text>
                  </TouchableOpacity>
                ))}

              </ScrollView> */}
              {/* <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}
              snapToAlignment='center'
              contentContainerStyle={{marginLeft:5}}

              >
                      {courses.map((e,index) => (
                        <CourseComponent key={index}
                        courseImage={e.courseImage}
                        courseTitle={e.title}
                        tutorName={e.tutor}
                        tutorImage={e.tutorImage}
                        courseTag={e.tag}
                        duration={e.duration}
                        numOfLesson={e.lessons}
                        styling={{ marginLeft:10, marginVertical:15}}
                      
                        />
                      ))}
              </ScrollView> */}
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:25}}>
                <Text style={{fontWeight:'600', marginVertical:5, color:'#404040', fontSize:14}}>Popular course</Text>
                <Text style={{fontWeight:'500', marginTop:14, color:'#404040', fontSize:10}}>See all</Text>
            </View>
            {/* <ScrollView> */}
            <View style={{marginHorizontal:4}}> 
              {courses.map((e,index) => (
                    <ListItem 
                    key={index}
                    courseImage={e.courseImage}
                    courseName={e.title}
                    tag={e.tag}
                    duration={e.duration}
                    noOfLessons={e.lessons}
                    tutorImage={e.tutorImage}
                    tutorName={e.tutor}

                    />
                  ))}

            </View>
              

            {/* </ScrollView> */}
            {/* <TouchableOpacity onPress={clearOnboarding}>
              <Text>clear onbording</Text>
            </TouchableOpacity> */}
      </ScrollView>

    </Screen>
  )
}

const styles = StyleSheet.create({})