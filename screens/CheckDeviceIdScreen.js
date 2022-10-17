import React from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, FlatList, Dimensions, TouchableOpacity, ImageBackground, Platform, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../model/colors';
import message from '../model/message';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
const width = Dimensions.get('window').width - 30;

const CheckDeviceIdScreen = ({ navigation }) => {

  const [data, setData] = React.useState({
    device_id: '',
    check_textInputChange: false,
    isValidUser: true,
  });


  const textInputChange = (val) => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        device_id: val,
        check_textInputChange: true,
        isValidUser: true
      })
    } else {
      setData({
        ...data,
        device_id: val,
        check_textInputChange: false,
        isValidUser: false
      })
    }
  }

  const Card = ({ items }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => { }}>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 5,
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ca2b20',
                borderColor: '#fff',
              }}>
              <Icon
                name="key"
                size={50}
                color="#fff"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginRight: 10, textAlign: 'center', color: '#05375a' }}>
              Checking Device ID
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 10, textAlign: 'center', color: '#05375a' }}>
              Please insert your device ID
            </Text>
            <TextInput
              placeholder='Device ID'
              style={styles.textInput}
              autoCapitalize='none'
              onEndEditing={(val) => textInputChange(val)}
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
              <Text style={styles.errorMsg}>Device ID must be 6 characters long.</Text>
            </Animatable.View>)
          }
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../assets/sign_in_bg.png')}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          data={message}
          renderItem={({ item }) => {
            return <Card items={item} />;
          }}
        />
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10,
          }}>
          <TouchableOpacity
            onPress={() => { Linking.openURL('tel:${0123456789}') }}
            style={[styles.signIn, {
              backgroundColor: '#ca2b20',
              borderColor: '#fff',
              borderWidth: 1,
            }]}
          >
            <Text style={[styles.textSign, { color: '#fff' }]}>Call to Customer service</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 100,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignInScreen")}
            style={[styles.signIn, {
              backgroundColor: '#ca2b20',
              borderColor: '#fff',
              borderWidth: 1,
            }]}
          >
            <Text style={[styles.textSign, { color: '#fff' }]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 250,
    width,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 200,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
    marginLeft: 20,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
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
  textInput: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    color: '#05375a',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ca2b20',
    borderWidth: 1,
    borderRadius: 5
  },
});

export default CheckDeviceIdScreen;