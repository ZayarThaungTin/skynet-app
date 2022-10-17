import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ForgetPasswordScreen from './ForgetPasswordScreen';
import ConfirmPasswordScreen from './ConfirmPasswordScreen';
import SplashPackageScreen from './SplashPackageScreen';
import SplashPaymentScreen from './SplashPaymentScreen';
import SplashRSPOutletScreen from './SplashRSPOutletScreen';
import MemberValidationScreen from './MemberValidationScreen';
import CheckDeviceIdScreen from './CheckDeviceIdScreen';
import CheckDeviceIdFailedScreen from './CheckDeviceIdFailedScreen';
import ComingSoonScreen from './ComingSoonScreen';
import OTPScreen from './OTPScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SplashPackageScreen" component={SplashPackageScreen} />
        <RootStack.Screen name="SplashPaymentScreen" component={SplashPaymentScreen} />
        <RootStack.Screen name="SplashRSPOutletScreen" component={SplashRSPOutletScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
        <RootStack.Screen name="ConfirmPasswordScreen" component={ConfirmPasswordScreen} />
        <RootStack.Screen name="MemberValidationScreen" component={MemberValidationScreen} />
        <RootStack.Screen name="CheckDeviceIdScreen" component={CheckDeviceIdScreen} />
        <RootStack.Screen name="CheckDeviceIdFailedScreen" component={CheckDeviceIdFailedScreen} />
        <RootStack.Screen name="ComingSoonScreen" component={ComingSoonScreen} />
        <RootStack.Screen name="OTPScreen" component={OTPScreen} />
    </RootStack.Navigator>
);

export default RootStackScreen;