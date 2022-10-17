import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../model/colors';
import active_package from '../model/active_package';
const width = Dimensions.get('window').width - 30;

const LifespanScreen = ({ navigation }) => {
  const Card = ({ items }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => { }}>
        <View style={styles.card}>
          <ImageBackground source={require('../assets/check_balance_card_background_image.png')} style={{ flex: 1, width: 'auto' }} resizeMode='stretch'>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 10,
                paddingTop: 20,
                paddingBottom: 10
              }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 13 }}>
                Purchased Package
              </Text>
              <Text style={{ color: '#fff', fontSize: 13, fontWeight: 'bold', paddingRight: 150 }}>
                {items.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 10,
                paddingBottom: 10
              }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 13 }}>
                Start Date
              </Text>
              <Text style={{ color: '#fff', fontSize: 13, fontWeight: 'bold', paddingRight: 150 }}>
                {items.start_date}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 10,
              }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 13 }}>
                End Date
              </Text>
              <Text style={{ color: '#fff', fontSize: 13, fontWeight: 'bold', paddingRight: 150 }}>
                {items.end_date}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require('../assets/background_image_new.jpg')}
      imageStyle={{ opacity: 0.5 }}
    >
      <SafeAreaView
        style={{ flex: 1, paddingHorizontal: 20, marginTop: 40 }}>
        <View style={{ marginTop: 20, marginBottom: 20, flexDirection: 'row' }}>
        </View>
        <FlatList
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2}
          data={active_package}
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
            marginBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Packages")}
            style={[styles.signIn, {
              backgroundColor: '#ca2b20',
              borderColor: '#fff',
              borderWidth: 1,
            }]}
          >
            <Text style={[styles.textSign, { color: '#fff' }]}>Renew Service</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
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
    height: 135,
    backgroundColor: COLORS.light,
    width: width - 10,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
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
    color: '#ff1770',
    marginLeft: 20,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: '#ff1770',
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

export default LifespanScreen;