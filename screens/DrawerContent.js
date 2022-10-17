import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
} from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from '../components/context';

import VideoListScreen from './VideoListScreen';

export function DrawerContent(props) {

    const [isDrakTheme, setIsDarkTheme] = React.useState(false);

    const { signOut } = React.useContext(AuthContext);

    const toggleTheme = () => {
        setIsDarkTheme(!isDrakTheme);
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../assets/sign_in_bg.png')}
            >
                <DrawerContentScrollView {...props}>
                    <View style={[styles.drawerContent, { backgroundColor: 0.1 }]}>
                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={require('../assets/logo.png')}
                                    size={50}
                                />
                                <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                                    <Title style={styles.title}>Zayar Thaung Tin</Title>
                                    <Caption style={styles.caption}>@zayarthaungtin</Caption>
                                </View>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                    <Caption style={styles.caption}>Following</Caption>
                                </View>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                    <Caption style={styles.caption}>Followers</Caption>
                                </View>
                            </View>
                        </View>

                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="home-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Home"
                                onPress={() => { props.navigation.navigate('Home') }}
                            />
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="storefront-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="RSP"
                                onPress={() => { props.navigation.navigate('RSP') }}
                            />
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="calendar-clock"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Lifespan"
                                onPress={() => { props.navigation.navigate('Lifespan') }}
                            />
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="package"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Packages"
                                onPress={() => { props.navigation.navigate('Packages') }}
                            />
                        </Drawer.Section>
                        <Drawer.Section style={styles.drawerSection}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => { }}>
                                <View style={{ flexDirection: 'column', marginLeft: 20, marginBottom: 15 }}>
                                    <View style={styles.row}>
                                        <View style={styles.section}>
                                            <Icon
                                                name="phone-classic"
                                                size={18}
                                            />
                                        </View>
                                        <View style={styles.section}>
                                            <Caption style={styles.caption}>+959754271440</Caption>
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.section}>
                                            <Icon
                                                name="email-outline"
                                                size={18}
                                            />
                                        </View>
                                        <View style={styles.section}>
                                            <Caption style={styles.caption}>admin@skynet.com.mm</Caption>
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.section}>
                                            <Icon
                                                name="facebook"
                                                size={18}
                                            />
                                        </View>
                                        <View style={styles.section}>
                                            <Caption style={styles.caption}>Facebook</Caption>
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.section}>
                                            <Icon
                                                name="phone-classic"
                                                size={18}
                                            />
                                        </View>
                                        <View style={styles.section}>
                                            <Caption style={styles.caption}>Messenger</Caption>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Drawer.Section>
                    </View>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="exit-to-app"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Sign Out"
                        onPress={() => { signOut() }}
                    />
                </Drawer.Section>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 10,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});