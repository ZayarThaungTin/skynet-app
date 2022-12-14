import React, { useEffect } from 'react';
import { View, ActivityIndicator, ImageBackground } from 'react-native';
import {
  NavigationContainer
} from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import ProfileScreen from './screens/ProfileScreen';
import ContactusScreen from './screens/ContactusScreen';
import PackagesScreen from './screens/PackagesScreen';
import MemberValidationScreen from './screens/MemberValidationScreen';
import CheckDeviceIdScreen from './screens/CheckDeviceIdScreen';
import CheckDeviceIdFailedScreen from './screens/CheckDeviceIdFailedScreen';
import ComingSoonScreen from './screens/ComingSoonScreen';
import PackageListScreen from './screens/PackageListScreen';
import PremierScreen from './screens/PremierScreen';
import VideoDetailScreen from './screens/VideoDetailScreen';

import RootStackScreen from './screens/RootStackScreen';

import { DrawerContent } from './screens/DrawerContent';

import { AuthContext } from './components/context';

// import { ActivityIndicator } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    // signIn: async (foundUser) => {
    signIn: async (userName, password) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      let userToken;
      userToken = null;
      // const userToken = String(foundUser[0].userToken);
      // const userName = foundUser[0].username;
      if (userName == '09754271440' && password == '12345678') {
        try {
          userToken = 'dfgfg';
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // setUserToken(null);
      // setIsLoading(false);
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('asdf');
      // setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token:', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {
          loginState.userToken != null ?
            (
              <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>

                <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                {/* <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
                <Drawer.Screen name="ContactusScreen" component={ContactusScreen} /> */}
                <Drawer.Screen name="PackagesScreen" component={PackagesScreen} />
                <Drawer.Screen name="PremierScreen" component={PremierScreen} />
                <Drawer.Screen name="VideoDetailScreen" component={VideoDetailScreen} />
                {/* <Drawer.Screen name="VideoListScreen" component={VideoListScreen} /> */}
                {/* <Drawer.Screen name="PackageListScreen" component={PackageListScreen} /> */}
              </Drawer.Navigator>
            ) : <RootStackScreen />
        }
        {/* <Drawer.Navigator initialRouteName="Home"> */}
      </NavigationContainer>

    </AuthContext.Provider>

  );
}

export default App;