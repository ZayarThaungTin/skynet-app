import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TextInput, TouchableOpacity, Animated, ImageBackground, Image } from 'react-native';
import Carousel from '../components/Carousel';
import { dummyData } from '../model/Data';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../model/colors';
import packages from '../model/packages';
import recommendations from '../model/recommendations';
import skynet_premier_infos from '../model/skynet_premier_infos';

import { ScrollView } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width / 2;

const full_width = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {

  const [animation, setAnimation] = useState(new Animated.Value(1));
  const { height } = Dimensions.get("window");

  const color = animation.interpolate({
    inputRange: [0, 0.2, 1.8, 2],
    outputRange: [
      "rgba(255, 255, 255, 0.0)",
      "rgba(45, 57, 82, 0.5)",
      "rgba(45, 57, 82, 0.8)",
      "rgba(255, 255, 255, 0.0)"],
  })

  const openModal = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const saveModal = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [0, -height],
    extrapolate: "clamp",
  });

  const modalTrigger = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false
    }).start();
  }

  const close = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  const save = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 500,
      useNativeDriver: false
    }).start(() => {
      animation.setValue(0)
    });
  };

  const open = {
    transform: [
      { scale: openModal },
      { translateY: saveModal }
    ]
  };

  const background = {
    backgroundColor: color
  }

  const Card = ({ packages }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('PackagesScreen', packages)}>
        <View style={[styles.packageCard, { paddingRight: 15 }]}>
          <ImageBackground source={packages.image} style={{ flex: 1 }} resizeMode='stretch'>

            <View
              style={{
                height: 100,
                alignItems: 'center',
              }}>
            </View>

            <Text style={{ fontWeight: 'bold', fontSize: 13, marginTop: 10, color: COLORS.white }}>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.white }}>
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };
  const PremierCard = ({ premier }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('PremierScreen', premier)}>
        <View style={[styles.premierCard, { paddingRight: 20 }]}>
          <ImageBackground source={premier.image} style={{ flex: 1 }} resizeMode='stretch'><View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
          </View>

            <Text style={{ fontWeight: 'bold', fontSize: 13, marginTop: 10, color: COLORS.white }}>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.white }}>
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };
  const RecommendedCard = ({ recommendation }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('PackagesScreen', recommendation)}>
        <ImageBackground style={styles.rmCardImage} source={recommendation.image}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              padding: 10
            }}>
            <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
              <View style={{ flexDirection: 'row' }}>
              </View>
              <View style={{ flexDirection: 'row' }}>
              </View>
            </View>
            <Text style={{ color: COLORS.white, fontSize: 13 }}>
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require('../assets/background_image_new.jpg')}
      imageStyle={{ opacity: 0.5 }}
    >
      <ScrollView style={{ width: '100%', flex: 1, paddingHorizontal: 10, backgroundColor: 0.1, marginTop: 70 }}>
        <Carousel data={dummyData} />

        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.sectionTitle}>PACKAGES</Text>
          <FlatList
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
            }}
            numColumns={2}
            data={packages}
            renderItem={({ item }) => {
              return <Card packages={item} />;
            }}
          />
          <Text style={styles.sectionTitle}>SKY PREMIER</Text>
          <FlatList
            contentContainerStyle={{ width: '100%' }}
            data={skynet_premier_infos}
            renderItem={({ item }) => {
              return <PremierCard premier={item} />;
            }}
          />
          <Text style={styles.sectionTitle}>PROMOTIONS</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{}}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={recommendations}
            renderItem={({ item }) => <RecommendedCard recommendation={item} />}
          />
        </View>
      </ScrollView>
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
    height: 225,
    backgroundColor: COLORS.light,
    width: width - 10,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  packageCard: {
    height: 140,
    backgroundColor: COLORS.light,
    width: width - 10,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  premierCard: {
    height: 140,
    backgroundColor: COLORS.light,
    width: full_width - 10,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 10,
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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 24,
  },
  modalButton: {
    backgroundColor: 'transparent',
    borderRadius: 100,
    borderColor: '#ffffff',
    marginTop: 64,
    borderWidth: 1,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 25,
    paddingRight: 25,
    marginHorizontal: 5,
    flex: 1,
  },
  moreText: {
    textAlign: 'center',
    marginTop: 64,
  },
  helloText: {
    fontSize: 51.2,
    textAlign: 'center',
    marginTop: 20,
  },
  wrap: {
    padding: 20,
    margin: 20,
    borderRadius: 8,
    backgroundColor: '#203953',
    shadowColor: '#40488F',
    shadowOffset: {
      width: 8.6,
      height: 8.6
    },
    shadowOpacity: 0.74,
    shadowRadius: 30,
    elevation: 10,
  },
  text: {
    fontSize: 28.8,
    color: '#ECF0F9',
    fontWeight: '600',
    fontFamily: 'Avenir',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowButton: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 105,
    width: 210,
    height: 80,
    shadowColor: '#4048BF',
    shadowOffset: {
      width: 8.4,
      height: 8.4
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 10,
  },
  mainButton: {
    zIndex: 10,
    width: 200,
    height: 70,
    borderRadius: 100,
    shadowColor: '#4048BF'
  },
  rmCardImage: {
    width: width,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    marginBottom: 10
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ff1b38',
  },
});

export default HomeScreen;