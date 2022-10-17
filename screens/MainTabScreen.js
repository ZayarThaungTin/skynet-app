import React from 'react';

import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import LifespanScreen from './LifespanScreen';
import RSPScreen from './RSPScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';
import PackageListScreen from './PackageListScreen';
import VideoListScreen from './VideoListScreen';
import ActionBarImage from './ActionBarImage';

const HomeStack = createStackNavigator();
const LifespanStack = createStackNavigator();
const RSPStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const PackageListStack = createStackNavigator();
const VideoListStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const bs = React.createRef();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#fd2da3',
                tabBarIcon: ({ color }) => (
                    <Icon name="home-outline" color={color} size={22} />
                ),
            }}
        />
        <Tab.Screen
            name="Lifespan"
            component={LifespanStackScreen}
            options={{
                tabBarLabel: 'Lifespan',
                tabBarColor: '#ff1770',
                tabBarIcon: ({ color }) => (
                    <Icon name="calendar-clock" color={color} size={22} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#fd2da3',
                tabBarIcon: ({ color }) => (
                    <Icon name="account-circle-outline" color={color} size={22} />
                ),
            }}
        />
        <Tab.Screen
            name="RSP"
            component={RSPStackScreen}
            options={{
                tabBarLabel: 'RSP',
                tabBarColor: '#ff1770',
                tabBarIcon: ({ color }) => (
                    <Icon name="storefront-outline" color={color} size={22} />
                ),
            }}
        />
        <Tab.Screen
            name="Packages"
            component={PackageListStackScreen}
            options={{
                tabBarLabel: 'Packages',
                tabBarColor: '#fd2da3',
                tabBarIcon: ({ color }) => (
                    <Icon name="package" color={color} size={22} />
                ),
            }}
        />
        <Tab.Screen
            name="Videos"
            component={VideoStackScreen}
            options={{
                tabBarLabel: 'Videos',
                tabBarColor: '#ff1770',
                tabBarIcon: ({ color }) => (
                    <Icon name="video-outline" color={color} size={22} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerTintColor: '#ff1b38',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerBackground: () => <ActionBarImage />,
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title: 'SKYNET',
            headerLeft: () => (
                <View style={{ marginLeft: 10, alignItems: 'center' }}>
                    <Icon.Button
                        name="menu"
                        size={25}
                        backgroundColor="#fd2a8f"
                        onPress={() => navigation.openDrawer()}>
                    </Icon.Button>
                </View>
            ),
        }} />
    </HomeStack.Navigator>
);

const LifespanStackScreen = ({ navigation }) => (
    <LifespanStack.Navigator screenOptions={{
        headerTintColor: '#ff1b38',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerBackground: () => <ActionBarImage />,
    }}>
        <LifespanStack.Screen name="Lifespan" component={LifespanScreen} options={{
            headerLeft: () => (
                <View style={{ padding: 10, alignItems: 'center' }}>
                    <Icon.Button name="menu" size={25} backgroundColor="#fd2a8f" onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
            ),
        }} />
    </LifespanStack.Navigator>
);
const ProfileStackScreen = ({ navigation }) => {

    return (
        <ProfileStack.Navigator
            screenOptions={{
                headerTintColor: '#ff1b38',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerBackground: () => <ActionBarImage />,
            }}>
            <ProfileStack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerLeft: () => (
                        <View style={{ padding: 10, alignItems: 'center' }}>
                            <Icon.Button name="menu" size={25} backgroundColor="#fd2a8f" onPress={() => navigation.openDrawer()}></Icon.Button>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ marginRight: 10, alignItems: 'center' }}>
                            <Icon.Button
                                name="account-edit"
                                size={25}
                                backgroundColor='#fff'
                                color='#fd2a8f'
                                onPress={() => navigation.navigate('EditProfile')}
                            />
                        </View>
                    ),
                }}
            />
            <ProfileStack.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={{
                    title: 'Edit Profile',
                }}
            />
        </ProfileStack.Navigator>
    );
};

const RSPStackScreen = ({ navigation }) => (
    <RSPStack.Navigator screenOptions={{
        headerTintColor: '#ff1b38',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerBackground: () => <ActionBarImage />,
    }}>
        <RSPStack.Screen name="RSP" component={RSPScreen} options={{
            headerLeft: () => (
                <View style={{ padding: 10, alignItems: 'center' }}>
                    <Icon.Button name="menu" size={25} backgroundColor="#fd2a8f" onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
            ),
        }} />
    </RSPStack.Navigator>
);

const PackageListStackScreen = ({ navigation }) => (
    <PackageListStack.Navigator screenOptions={{
        headerTintColor: '#ff1b38',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerBackground: () => <ActionBarImage />,
    }}>
        <PackageListStack.Screen name="Packages" component={PackageListScreen} options={{
            headerLeft: () => (
                <View style={{ padding: 10, alignItems: 'center' }}>
                    <Icon.Button name="menu" size={25} backgroundColor="#fd2a8f" onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
            ),
        }} />
    </PackageListStack.Navigator>
);

const VideoStackScreen = ({ navigation }) => (
    <VideoListStack.Navigator screenOptions={{
        headerTintColor: '#ff1b38',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerBackground: () => <ActionBarImage />,
    }}>
        <VideoListStack.Screen name="Videos" component={VideoListScreen} options={{
            headerLeft: () => (
                <View style={{ padding: 10, alignItems: 'center' }}>
                    <Icon.Button name="menu" size={25} backgroundColor="#fd2a8f" onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
            ),
        }} />
    </VideoListStack.Navigator>
);