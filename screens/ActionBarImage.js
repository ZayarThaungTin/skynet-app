import React from 'react';

import { View, Image, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../model/colors';

const ActionBarImage = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={require('../assets/header_footer_bg.jpg')}
        style={{ width: '100%', height: 100, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
      />
      <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 70, paddingHorizontal: 20 }}>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Check Balance" style={styles.input} />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="search" size={30} color="#fff" />
        </View>
      </View>
    </View>
  );
};

export default ActionBarImage;

const styles = StyleSheet.create({
  searchContainer: {
    height: 50,
    backgroundColor: '#ff1770',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: '#fff',
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
})