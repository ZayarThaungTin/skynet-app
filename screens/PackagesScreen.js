import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, Animated, TouchableOpacity, ImageBackground, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../model/colors';

import { Button, Modal, VStack, HStack, Radio, Center, NativeBaseProvider } from "native-base";

const PackagesScreen = ({ navigation, route }) => {
  const plant = route.params;

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

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  // const [showModal4, setShowModal4] = useState(false);

  const Payment_method_modal = () => {
    return <Center>
      <View style={styles.buyBtn}>
        <TouchableOpacity style={[styles.mainButton, styles.center]} onPress={() => setShowModal(true)}>
          <Text
            style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
            Renew Service
          </Text>
        </TouchableOpacity>
      </View>
      <Modal transparent={true} isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            width: 300,
            height: 300,
            marginBottom: 160
          }}>
            <Modal.Content maxWidth="350">
              <Modal.CloseButton />
              <Modal.Header>Subscription</Modal.Header>
              <Modal.Body>
                <VStack space={4}>
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text fontWeight="medium">Package Name</Text>
                    <Text color="blueGray.400">{plant.name} Ks</Text>
                  </HStack>
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text fontWeight="medium">Sub Total</Text>
                    <Text color="blueGray.400">{plant.price} Ks</Text>
                  </HStack>
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text fontWeight="medium">Tax</Text>
                    <Text color="blueGray.400">0 Ks</Text>
                  </HStack>
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text fontWeight="medium">Total Amount</Text>
                    <Text color="green.500">{plant.price} Ks</Text>
                  </HStack>
                </VStack>
              </Modal.Body>
              <Modal.Footer>
                <Button flex="1" onPress={() => {
                  setShowModal(false);
                  setShowModal2(true);
                }}>
                  Continue
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} isOpen={showModal2} onClose={() => setShowModal2(false)} size="lg">
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            width: 300,
            height: 300,
            marginBottom: 160
          }}>
            <Modal.Content maxWidth="350">
              <Modal.CloseButton />
              <Modal.Header>Device ID</Modal.Header>
              <Modal.Body>
                <VStack space={1}>
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text fontWeight="medium">Device ID</Text>
                    <TextInput placeholder="Enter your device id" style={styles.input} />
                  </HStack>
                </VStack>
              </Modal.Body>
              <Modal.Footer>
                <Button flex="1" onPress={() => {
                  setShowModal(false);
                  setShowModal2(false);
                  setShowModal3(true);
                }}>
                  Continue
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} isOpen={showModal3} onClose={() => setShowModal3(false)} size="lg">
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            width: 300,
            height: 300,
            marginBottom: 60,
          }}>
            <Modal.Content maxWidth="350">
              <Modal.CloseButton />
              <Modal.Header>Select Options</Modal.Header>
              <Modal.Body>
                <Radio.Group defaultValue="option_1" name="options" size="sm">
                  <VStack space={2}>
                    <Radio alignItems="flex-start" _text={{
                      mt: "-1",
                      ml: "2",
                      fontSize: "sm"
                    }} value="option_1">
                      Renew Service
                    </Radio>
                    <Radio alignItems="flex-start" _text={{
                      mt: "-1",
                      ml: "2",
                      fontSize: "sm"
                    }} value="option_2">
                      Change Package
                    </Radio>
                  </VStack>
                </Radio.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button flex="1" onPress={() => {
                  setShowModal(false);
                  setShowModal2(false);
                  setShowModal3(false);
                  setShowModal4(true);
                }}>
                  Continue
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} isOpen={showModal4} size="lg" onClose={() => setShowModal4(false)}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            width: 300,
            height: 300,
            marginBottom: 160
          }}>
            <Modal.Content maxWidth="350">
              <Modal.CloseButton />
              <Modal.Header>Payment Options</Modal.Header>
              <Modal.Body>
                <Radio.Group name="payment_method" size="sm">
                  <VStack space={7}>
                    <Radio alignItems="flex-start" _text={{
                      mt: "-1",
                      ml: "2",
                      fontSize: "sm"
                    }} value="payment_1">
                      <Image style={{ flex: 1, width: 50, height: 50, marginLeft: 5, padding: 5 }} source={require('../assets/citizens_pay_logo.png')} />
                      CITIZENS PAY
                    </Radio>
                    <Radio alignItems="flex-start" _text={{
                      mt: "-1",
                      ml: "2",
                      fontSize: "sm"
                    }} value="payment_2">
                      <Image style={{ flex: 1, width: 50, height: 50, marginLeft: 5, padding: 5 }} source={require('../assets/mpu_logo.png')} />
                      MPU
                    </Radio>
                    <Radio alignItems="flex-start" _text={{
                      mt: "-1",
                      ml: "2",
                      fontSize: "sm"
                    }} value="payment_3">
                      <Image style={{ flex: 1, width: 50, height: 50, marginLeft: 5, padding: 5 }} source={require('../assets/visa_logo.png')} />
                      VISA
                    </Radio>
                    <Radio alignItems="flex-start" _text={{
                      mt: "-1",
                      ml: "2",
                      fontSize: "sm"
                    }} value="payment_4">
                      <Image style={{ flex: 1, width: 50, height: 50, marginLeft: 5, padding: 5 }} source={require('../assets/momoney_logo.png')} />
                      MOMONEY
                    </Radio>
                    <Radio alignItems="flex-start" _text={{
                      mt: "-1",
                      ml: "2",
                      fontSize: "sm"
                    }} value="payment_5">
                      <Image style={{ flex: 1, width: 50, height: 50, marginLeft: 5, padding: 5 }} source={require('../assets/wave_pay_logo.png')} />
                      WAVE PAY
                    </Radio>
                    <Radio alignItems="flex-start" _text={{
                      mt: "-1",
                      ml: "2",
                      fontSize: "sm"
                    }} value="payment_6">
                      <Image style={{ flex: 1, width: 50, height: 50, marginLeft: 5, padding: 5 }} source={require('../assets/uab_pay_logo.png')} />
                      UAB PAY
                    </Radio>
                    <Radio alignItems="flex-start" _text={{
                      mt: "-1",
                      ml: "2",
                      fontSize: "sm"
                    }} value="payment_7">
                      <Image style={{ flex: 1, width: 50, height: 50, marginLeft: 5, padding: 5 }} source={require('../assets/sai_sai_pay_logo.png')} />
                      SAI SAI PAY
                    </Radio>
                  </VStack>
                </Radio.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button flex="1" onPress={() => {
                  setShowModal(false);
                  setShowModal2(false);
                  setShowModal3(false);
                  setShowModal4(false);
                }}>
                  Checkout
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </View>
        </View>
      </Modal>
    </Center>;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <Image source={plant.image} style={[styles.imageContainer, { resizeMode: 'stretch', flex: 1 }]} />
      <View style={styles.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={styles.line} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Best choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{plant.name}</Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              {plant.price} Ks
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
            {plant.about}
          </Text>
          <View
            style={[styles.container, {
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                1
              </Text>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>+</Text>
              </View>
            </View>
            <NativeBaseProvider>
              <Center flex={1} px="3">
                <Payment_method_modal />
              </Center>
            </NativeBaseProvider>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PackagesScreen;

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
});