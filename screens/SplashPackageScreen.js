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

const SplashPackageScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../assets/splash_screen_slider_1.png')}
            >
                <View style={styles.header}>
                </View>
                <Animatable.View
                    style={styles.footer}
                    animation="fadeInUpBig"
                >
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SplashPaymentScreen")}
                            style={[styles.signIn, {
                                backgroundColor: '#fff',
                                borderColor: '#fff',
                                borderWidth: 1,
                            }]}
                        >
                            <Text style={[styles.textSign, { color: '#ca2b20' }]}>Next</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#ca2b20"
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </ImageBackground>
        </View>
    );
};

export default SplashPackageScreen;

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
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 150,
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