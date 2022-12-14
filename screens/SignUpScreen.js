import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    TextInput,
    StatusBar,
    StyleSheet,
    ImageBackground
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const SignUpScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        })
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val,
        })
    }

    const updateSecureTextEntry = (val) => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

    const updateConfirmSecureTextEntry = (val) => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry,
        })
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../assets/sign_in_bg.png')}
            >
                <StatusBar backgroundColor='#ca2b20' barStyle='light-content' />
                <View style={styles.header}>
                    <Text style={styles.text_header}>Register Now!</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={[styles.footer, { backgroundColor: 0.1 }]}
                >
                    <View style={[styles.footer, { backgroundColor: 0.1 }]}>
                        <Text style={styles.text_footer}>Phone Number</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name='phone'
                                color='#05375a'
                                size={20}
                            />
                            <TextInput
                                placeholder='Phone Number'
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val) => textInputChange(val)}
                            />
                            {data.check_textInputChange ?
                                <Animatable.View
                                    animation="bounceIn"
                                >
                                    <Feather
                                        name="check-circle"
                                        color='green'
                                        size={20}
                                    />
                                </Animatable.View>
                                : null}
                        </View>
                        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name='lock'
                                color='#05375a'
                                size={20}
                            />
                            <TextInput
                                placeholder='Password'
                                secureTextEntry={data.secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val) => handlePasswordChange(val)}
                            />
                            <TouchableOpacity
                                onPress={updateSecureTextEntry}
                            >
                                {data.secureTextEntry ?
                                    <Feather
                                        name="eye-off"
                                        color='gray'
                                        size={20}
                                    />
                                    :
                                    <Feather
                                        name="eye"
                                        color='gray'
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>
                        </View>

                        <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirm Password</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name='lock'
                                color='#05375a'
                                size={20}
                            />
                            <TextInput
                                placeholder='Confirm Password'
                                secureTextEntry={data.confirm_secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val) => handleConfirmPasswordChange(val)}
                            />
                            <TouchableOpacity
                                onPress={updateConfirmSecureTextEntry}
                            >
                                {data.confirm_secureTextEntry ?
                                    <Feather
                                        name="eye-off"
                                        color='gray'
                                        size={20}
                                    />
                                    :
                                    <Feather
                                        name="eye"
                                        color='gray'
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>
                        </View>

                        <View style={styles.textPrivate}>
                            <Text style={styles.color_textPrivate}>
                                By signing up you agree to our
                            </Text>
                            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
                            <Text style={styles.color_textPrivate}>{" "}and</Text>
                            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy</Text>
                        </View>

                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("SignUpScreen")}
                                style={[styles.signIn, {
                                    backgroundColor: '#ca2b20',
                                    borderColor: '#fff',
                                    borderWidth: 1,
                                }]}
                            >
                                <Text style={[styles.textSign, { color: '#fff' }]}>Sign Up</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={[styles.signIn, {
                                    borderColor: '#ca2b20',
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}
                            >
                                <Text style={[styles.textSign, { color: '#ca2b20' }]}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animatable.View>
            </ImageBackground>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ca2b20'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#1b1464',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
        button: {
        },
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        marginBottom: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});