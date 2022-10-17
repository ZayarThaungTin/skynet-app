import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../model/colors';
import member_validation from '../model/member_validation';
const width = Dimensions.get('window').width - 30;

const MemberValidationScreen = ({ navigation }) => {
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
                name="handshake"
                size={50}
                color="#fff"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginLeft: 10,
              marginTop: 20,
              marginBottom: 10
            }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginRight: 10, color: '#05375a', textAlign: 'center' }}>
              {items.title}
            </Text>

            <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 10, color: '#05375a', textAlign: 'center' }}>
              {items.paragraph}
            </Text>
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
        source={require('../assets/sign_in_bg.png')}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          data={member_validation}
          renderItem={({ item }) => {
            return <Card items={item} />;
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 10
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CheckDeviceIdScreen")}
            style={[styles.signIn, {
              backgroundColor: '#ca2b20',
              borderColor: '#fff',
              borderWidth: 1,
            }]}
          >
            <Text style={[styles.textSign, { color: '#fff' }]}>Yes</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 100,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ComingSoonScreen")}
            style={[styles.signIn, {
              backgroundColor: '#ca2b20',
              borderColor: '#fff',
              borderWidth: 1,
            }]}
          >
            <Text style={[styles.textSign, { color: '#fff' }]}>No</Text>
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
});

export default MemberValidationScreen;