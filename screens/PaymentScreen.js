import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS } from '../model/colors';
import banks from '../model/banks';
const width = Dimensions.get('window').width - 30;

const PaymentScreen = ({ navigation }) => {
  const Card = ({ items }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => { }}>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 5,
            }}>
            <Text style={{
              backgroundColor: COLORS.light,
              fontWeight: 'bold',
              fontSize: 15,
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 5,
              alignItems: 'center',
              padding: 10
            }}>
              {items.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
              Account Owner :
            </Text>
            <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 10 }}>
              {items.account_owner}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,

            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
              Account Number :
            </Text>
            <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 10 }}>
              {items.account_no}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 5,
              marginRight: 10
            }}>
            <TouchableOpacity
              onPress={() => { }}
              style={{
                borderColor: '#ca2b20',
                borderWidth: 1,
                width: 130,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5
              }}
            >
              <Text style={{ color: '#ca2b20', fontSize: 13, fontWeight: 'bold' }}>Copy Number</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Please Select Bank</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        data={banks}
        renderItem={({ item }) => {
          return <Card items={item} />;
        }}
      />
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PaymentConfirmScreen")}
          style={[styles.signIn, {
            backgroundColor: '#ca2b20',
            borderColor: '#fff',
            borderWidth: 1,
          }]}
        >
          <Text style={[styles.textSign, { color: '#fff' }]}>Continue</Text>
        </TouchableOpacity>
      </View>
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
    height: 160,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
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

export default PaymentScreen;