import React from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    Platform,
    TextInput,
    StatusBar,
    StyleSheet,
    Alert,
    ImageBackground
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import { AuthContext } from '../components/context';

const SignInScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            })
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = (val) => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (username, password) => {
        if (username.length == 0 || password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }
        signIn(username, password);
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../assets/sign_in_bg.png')}
            >
                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome!</Text>
                </View>

                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}
                >
                    <View style={styles.footer}>
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
                                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
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
                        {data.isValidUser ? null :
                            (<Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                            </Animatable.View>)
                        }

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
                        {data.isValidPassword ? null :
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>Password must be 4 characters long.</Text>
                            </Animatable.View>
                        }
                        <TouchableOpacity
                            onPress={() => navigation.navigate("OTPScreen")}
                        >
                            <Text style={{ color: '#ca2b20', marginTop: 15, marginBottom: 15 }}>Forget Password?</Text>
                        </TouchableOpacity>

                        <View style={styles.button}>

                            <TouchableOpacity
                                onPress={() => { loginHandle(data.username, data.password) }}
                                style={[styles.signIn, {
                                    backgroundColor: '#ca2b20',
                                    borderColor: '#fff',
                                    borderWidth: 1,
                                }]}
                            >
                                <Text style={[styles.textSign, { color: '#fff' }]}>Sign In</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("SignUpScreen")}
                                style={[styles.signIn, {
                                    borderColor: '#ca2b20',
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}
                            >
                                <Text style={[styles.textSign, { color: '#ca2b20' }]}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animatable.View>
            </ImageBackground>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#05375a',
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
    },
    button: {
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
    }
});