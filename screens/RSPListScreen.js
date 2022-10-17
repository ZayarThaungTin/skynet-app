import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Dimensions, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../model/colors';
import rsp from '../model/rsp';
const width = Dimensions.get('window').width - 30;
const Card = ({ items }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => { }}>
      <View style={styles.card}>
        <ImageBackground
          style={{ flex: 1 }}
          source={require('../assets/rsp_background_image.png')}
        >
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10
              }}>
            </View>
          </View>
          <View style={{ justifyContent: 'center', marginLeft: 10, marginRight: 10, marginBottom: 20 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                width: width / 2,
              }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', color: '#252525' }}>
                Shop Name
              </Text>
              <Text style={{ fontSize: 13, fontWeight: 'bold', textAlign: 'left', color: '#252525' }}>
                {items.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', color: '#252525' }}>
                Address
              </Text>
              <Text style={{ fontSize: 13, fontWeight: 'bold', textAlign: 'left', color: '#252525' }}>
                {items.address}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                width: width / 2,
              }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'left', marginRight: 30, color: '#252525' }}>
                Phone
              </Text>
              <Text style={{ fontSize: 13, fontWeight: 'bold', textAlign: 'left', color: '#252525' }}>
                {items.phone}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

class RSPListScreen extends Component {
  state = { region: '', township: '' }
  updateRegion = (option) => {
    if (option !== 'disabled') {
      this.setState({ region: option })
    }
  }
  updateTownship = (option) => {
    if (this.state.region !== null && option !== 'disabled') {
      this.setState({ township: option })
    }
  }

  render() {
    return (

      <View style={[styles.container, { marginTop: 150 }]}>
        <ImageBackground
          style={{ flex: 1, width: '100%' }}
          source={require('../assets/background_image.png')}
          imageStyle={{ opacity: 0.5 }}
        >

          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: 10,
              paddingBottom: 50,
              paddingLeft: 12
            }}
            numColumns={1}
            data={rsp}
            renderItem={({ item }) => {
              return <Card items={item} />;
            }}
          />
        </ImageBackground>
      </View>

    )
  }
}

export default RSPListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 50,
    alignSelf: 'center',
    color: 'green'
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
    height: 225,
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
});