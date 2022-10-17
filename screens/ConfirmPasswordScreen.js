import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
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

const ConfirmPasswordScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { ConfirmPassword } = React.useContext(AuthContext);

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
        ConfirmPassword(username, password);
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../assets/sign_in_bg.png')}
            >
                <StatusBar backgroundColor='#ca2b20' barStyle='light-content' />
                <View style={styles.header}>
                    <Text style={styles.text_header}>New Password Confirmation!</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={[styles.footer, { backgroundColor: 0.1 }]}
                >
                    <View style={[styles.footer, { backgroundColor: 0.1 }]}>
                        <Text style={styles.text_footer}>New Password</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name='lock'
                                color='#05375a'
                                size={20}
                            />
                            <TextInput
                                placeholder='New Password'
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
                        {data.isValidUser ? null :
                            (<Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                            </Animatable.View>)
                        }

                        <Text style={[styles.text_footer, { marginTop: 35 }]}>New Confirmed Password</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name='lock'
                                color='#05375a'
                                size={20}
                            />
                            <TextInput
                                placeholder='New Confirmed Password'
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

                        <View style={styles.button}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("SignInScreen")}
                                style={[styles.ConfirmPassword, {
                                    backgroundColor: '#ca2b20',
                                    borderColor: '#fff',
                                    borderWidth: 1,
                                }]}
                            >
                                <Text style={[styles.textSign, { color: '#fff' }]}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animatable.View>
            </ImageBackground>
        </View>
    );
};

export default ConfirmPasswordScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ca2b20'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
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
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    ConfirmPassword: {
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