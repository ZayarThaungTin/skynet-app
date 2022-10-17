import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../model/colors';
import contacts from '../model/contacts';
const width = Dimensions.get('window').width - 30;

const ContactusScreen = ({ navigation }) => {
  const Card = ({ items }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => { }}>
        <View style={styles.card}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Contact Us</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Icon
              name="phone-classic"
              size={18}
              color={color}
            />
            <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 10 }}>
              {items.phone}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,

            }}>
            <Icon
              name="email-outline"
              size={18}
              color={color}
            />
            <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 10 }}>
              {items.email}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,

            }}>
            <Icon
              name="facebook"
              size={18}
              color={color}
            />
            <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 10 }}>
              {items.facebook_url}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,

            }}>
            <Icon
              name="facebook-messenger"
              size={18}
              color={color}
            />
            <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 10 }}>
              {items.messenger_url}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        data={contacts}
        renderItem={({ item }) => {
          return <Card items={item} />;
        }}
      />
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

export default ContactusScreen;