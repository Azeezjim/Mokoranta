// import AppStackNavigation from './src/navigation/AppStackNavigation';

// export default function App() {
//   return <AppStackNavigation />;
// }

// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import Screen from './src/components/Screen';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigation';
import navigationTheme from './src/navigation/navigationTheme';
import Onboarding from './src/screens/Onboarding';
// import { store } from './src/config/store';

import AuthContext from './src/Global/AuthContext';
// import store from './src/config/store'

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const Loading = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flex: 1 }}>
        <ActivityIndicator size='large' color='#03a9f4' />
      </View>
    )
  }
  // const checkOnboarding = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@viewedOnboarding');
  //     if (value !== null)
  //       setViewedOnboarding(true);
  //   } catch (error) {
  //     console.log('Error @getiewedOnboarding', error)

  //   } finally {
  //     setLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   checkOnboarding();
  // }, [])
  return (
    // <Provider store={store}>
      // <AuthContext.Provider value={{ viewedOnboarding, setViewedOnboarding }}>
        <NavigationContainer theme={navigationTheme} onReady={() => console.log('yes')}>
          <Screen style={styles.container}>
            {/* <Onboarding/> */}
            {loading ? <Loading /> : viewedOnboarding ? <AuthNavigator
            /> : <Onboarding />}

            {/* <AuthNavigator/> */}
            {/* <FeedNavigator/> */}
            {/* // <HomeScreen/> */}

          </Screen>
        </NavigationContainer>

      // </AuthContext.Provider>

    // {/* </Provider> */}

    // <HomeScreen/>
    // <Home/>
    // <LoginScreen/>
    // <SignupScreen/>
    // <ForgetPassword/>
  );
}

{/* {loading ? <Loading/> : viewedOnboarding ? <HomeScreen/> : <Onboarding/>} */ }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

