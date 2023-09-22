
import { StyleSheet, View, Animated, FlatList } from 'react-native'
import React, {useState, useRef, useContext} from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import AuthContext from '../Global/AuthContext'


import OnboardingItem from '../components/OnboardingItem'
import Slides from '../components/Slides'
import Paginator from '../components/Paginator'
import NextButton from '../components/NextButton'



export default function Onboarding({navigation}) {
  const {setViewedOnboarding} = useContext(AuthContext);


  // const scrollTo = async() =>  {
  //   if(currentIndex < Slides.length - 1){
  //     slidesRef.current.scrollToIndex({index: currentIndex + 1});
  //   }
  //   else{
  //     try {
  //       const value = await AsyncStorage.setItem('@viewedOnboarding', 'true');
        
  //     } catch (error) {
  //       console.log('Error @setViewedOnboarding', error) 
  //     }finally{
  //       setViewedOnboarding(true);
  //     }
  //   }
  // }

  

  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;

  return (
        <View style={styles.container}>
          <View style={{flex:3}}>
              <FlatList
              key={({item}) => item.id}
              pagingEnabled
              bounces={false}
              horizontal
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event([{nativeEvent:{contentOffset:{x: scrollX}}}], {
                useNativeDriver:false
              
              })}
              onViewableItemsChanged={viewableItemChanged}
              viewabilityConfig={viewConfig}
              scrollEventThrottle={32}
              ref={slidesRef}
              data={Slides}
              renderItem={({item}) => 
                <OnboardingItem item={item}/>
                }
              />
          </View>
          <Paginator data={Slides} scrollX={scrollX}/> 
          {/* <NextButton scrollTo={scrollTo} navigation={navigation}/> */}
        </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})