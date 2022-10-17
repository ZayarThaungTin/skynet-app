import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Picker, ImageBackground } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import customers from '../model/customers';

const ProfileScreen = () => {

  const [selectedRegionValue, setSelectedRegionValue] = useState("disabled");
  const [selectedTownshipValue, setSelectedTownshipValue] = useState("disabled");

  const Card = ({ items }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => { }}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Avatar.Image
              source={require('../assets/logo.png')}
              size={80}
            />
            <View style={{ marginLeft: 20 }}>
              <Title style={[styles.title, {
                marginTop: 10,
                marginBottom: 5,
              }]}>{items.name}</Title>
              <Caption style={styles.caption}>@Member Since {items.date_time}</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="xml" color="#666666" size={20} />
            <Text style={{ color: "#666666", marginLeft: 20, marginTop: 5 }}>{items.device_id}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#666666" size={20} />
            <Text style={{ color: "#666666", marginLeft: 20, marginTop: 5 }}>{items.phone}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="earth" color="#666666" size={20} />
            <Picker selectedValue={selectedRegionValue} onValueChange={(itemValue, itemIndex) => setSelectedRegionValue(itemValue)} style={{ height: 30, color: '#666666', marginLeft: 20, marginRight: 15 }} >
              <Picker.Item label="Select your region" value="disabled" color="gray" />
              <Picker.Item label="Ayeyarwady" value="Ayeyarwady Region" />
              <Picker.Item label="Yangon" value="Yangon Region" />
              <Picker.Item label="Bago" value="Bago Region" />
              <Picker.Item label="Sagaing" value="Sagaing Region" />
              <Picker.Item label="Mandalay" value="Mandalay Region" />
              <Picker.Item label="Magway" value="Magway Region" />
              <Picker.Item label="Naypyidaw" value="Naypyidaw Region" />
            </Picker>
          </View>
          <View style={styles.row}>
            <Icon name="home-city-outline" color="#666666" size={20} />
            <Picker selectedValue={selectedTownshipValue} onValueChange={(itemValue, itemIndex) => setSelectedTownshipValue(itemValue)} style={{ height: 30, color: '#666666', marginLeft: 20, marginRight: 15 }} >
              <Picker.Item label="Select your township" value="disabled" color="gray" />
              <Picker.Item label="Ayeyarwady" value="Ayeyarwady Township" />
              <Picker.Item label="Yangon" value="Yangon Township" />
              <Picker.Item label="Bago" value="Bago Township" />
              <Picker.Item label="Sagaing" value="Sagaing Township" />
              <Picker.Item label="Mandalay" value="Mandalay Township" />
              <Picker.Item label="Magway" value="Magway Township" />
              <Picker.Item label="Naypyidaw" value="Naypyidaw Township" />
            </Picker>
          </View>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#666666" size={20} />
            <Text style={{ color: "#666666", marginLeft: 20 }}>{items.address}</Text>
          </View>
        </View>

        <View style={styles.infoBoxWrapper}>
          {items.check_active_package ?
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <Title style={{ color: '#666666', }}>Active Package : {items.active_package_name}</Title>
              <Caption style={{ color: '#666666', }}>Subscribed Date : {items.subscribed_date}</Caption>
              <Caption style={{ color: '#666666', }}>Expired Date : {items.expired_date}</Caption>
            </View> : null}
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => { }}>
            <View style={styles.menuItem}>
              <Icon name="heart-outline" color="#666666" size={25} />
              <Text style={styles.menuItemText}>Favorites</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => { }}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#666666" size={25} />
              <Text style={styles.menuItemText}>Payment</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => { }}>
            <View style={styles.menuItem}>
              <Icon name="account-check-outline" color="#666666" size={25} />
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => { }}>
            <View style={styles.menuItem}>
              <Icon name="cog-outline" color="#666666" size={25} />
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>
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
      <SafeAreaView style={[styles.container, { marginTop: 80 }]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
          }}
          data={customers}
          renderItem={({ item }) => {
            return <Card items={item} />;
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );


};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666666',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: '#666666',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#666666',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    margin: 20,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#666666',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});