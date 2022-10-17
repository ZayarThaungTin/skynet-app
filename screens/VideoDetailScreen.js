import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, Animated, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../model/colors';

import { Button, Modal, VStack, HStack, Radio, Center, NativeBaseProvider } from "native-base";

const VideoDetailScreen = ({ navigation, route }) => {
  const videos = route.params;

  const [animation, setAnimation] = useState(new Animated.Value(0));
  const { height } = Dimensions.get("window");

  const color = animation.interpolate({
    inputRange: [0, 0.2, 1.8, 2],
    outputRange: [
      "rgba(255, 255, 255, 0.0)",
      "rgba(45, 57, 82, 0.5)",
      "rgba(45, 57, 82, 0.8)",
      "rgba(255, 255, 255, 0.0)"],
  })
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const pauseVideo = () => {
    if (video) {
      video.current.pauseAsync();
    }
  }

  const playVideo = () => {
    if (video) {
      video.current.playAsync();
    }
  }

  const handlePlaying = (isVisible) => {
    isVisible ? playVideo() : pauseVideo();
  }


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <Video
        ref={video}
        style={{}}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        shouldPlay={false}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      >
      </Video>
      <View style={styles.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{videos.name}</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{videos.type}</Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              IMDB {videos.imdb}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {videos.description}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VideoDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.3,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.7,
    height: '100%',
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 10,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: { fontWeight: 'bold', fontSize: 28 },
  buyBtn: {
    width: 160,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
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
  modal: {
    width: '100%',
    marginBottom: 60
  },
  input: {
    width: 140,
    fontSize: 13,
    fontWeight: 'bold',
    flex: 1,
    color: '#ff1770',
    marginLeft: 10,
    padding: 3,
    borderWidth: 1,
    borderColor: '#ff1770'
  },
  video: {
    flex: 0.3,
    alignSelf: 'center',
    width: 320,
    marginTop: 50
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});