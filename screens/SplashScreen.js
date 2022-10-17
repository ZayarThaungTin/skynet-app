import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    ImageBackground
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../assets/background_image_white.png')}
            >

                <View style={styles.header}>
                    <Animatable.Image
                        animation="bounceIn"
                        duraton="1500"
                        source={require('../assets/skynet_logo.png')}
                        style={styles.logo}
                        resizeMode='stretch'
                    />
                </View>
                <Animatable.View
                    style={styles.footer}
                    animation="fadeInUpBig"
                >
                    <Text style={styles.title}>SkyNet is always together with every warm family</Text>
                    <Text style={styles.text}>Sign in with Phone Number</Text>
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SplashPackageScreen")}
                            style={[styles.signIn, {
                                backgroundColor: '#ca2b20',
                                borderColor: '#ca2b20',
                                borderWidth: 1,
                            }]}
                        >
                            <Text style={[styles.textSign, { color: '#fff' }]}>Get Started</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#fff"
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </ImageBackground>
        </View>
    );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#252525',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: '#252525',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});