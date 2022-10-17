import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import PaymentScreen from './PaymentScreen';
import PaymentConfirmScreen from './PaymentConfirmScreen';
import PaymentSuccessScreen from './PaymentSuccessScreen';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PaymentStack = createStackNavigator();

const PaymentStackScreen = ({ navigation }) => (
    <PaymentStack.Navigator headerMode='none'>
        <PaymentStack.Screen name="PaymentScreen" component={PaymentScreen} />
        <PaymentStack.Screen name="PaymentConfirmScreen" component={PaymentConfirmScreen} />
        <PaymentStack.Screen name="PaymentSuccessScreen" component={PaymentSuccessScreen} />
        <PaymentStack.Screen name="HomeScreen" component={HomeScreen} />
    </PaymentStack.Navigator>
);

export default PaymentStackScreen;