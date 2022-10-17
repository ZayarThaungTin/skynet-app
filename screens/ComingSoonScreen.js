import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Dimensions, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../model/colors';
import message from '../model/message';
const width = Dimensions.get('window').width - 30;

const ComingSoonScreen = ({ navigation }) => {
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
              marginTop: 10,
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
                name="clock"
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
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../assets/coming_soon_background_image.jpg')}
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
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 150,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignInScreen")}
            style={[styles.signIn, {
              backgroundColor: '#ca2b20',
              borderColor: '#fff',
              borderWidth: 1,
              width: '30%'
            }]}
          >
            <Text style={[styles.textSign, { color: '#fff' }]}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { Linking.openURL('tel:${0123456789}') }}
            style={[styles.signIn, {
              backgroundColor: '#ca2b20',
              borderColor: '#fff',
              borderWidth: 1,
              width: '70%'
            }]}
          >
            <Text style={[styles.textSign, { color: '#fff' }]}>Call to Customer service</Text>
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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default ComingSoonScreen;