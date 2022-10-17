import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Platform,
  FlatList,
  Picker,
  ScrollView
} from 'react-native';

import { useTheme } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import * as ImagePicker from 'react-native-image-picker';

import customers from '../model/customers';

const EditProfileScreen = () => {

  const [selectedRegionValue, setSelectedRegionValue] = useState("disabled");
  const [selectedTownshipValue, setSelectedTownshipValue] = useState("disabled");

  const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
  const { colors } = useTheme();

  const takePhotoFromCamera = () => {
    ImagePicker.launchCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.launchImageLibrary({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  }

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={() => { takePhotoFromCamera }}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={() => { choosePhotoFromLibrary }}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  const Card = ({ items }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => { }}>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#ca2b20"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#ca2b20',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: 'bold' }}>
            Member Since {items.date_time}
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            value={items.name}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="code" color={colors.text} size={20} />
          <TextInput
            placeholder="Device ID"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            value={items.device_id}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            value={items.phone}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="globe" color={colors.text} size={20} />
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
        <View style={styles.action}>
          <Icon name="home-city-outline" color={colors.text} size={20} />
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
        <View style={styles.action}>
          <FontAwesome name="address-book" color={colors.text} size={20} />
          <TextInput
            placeholder="Address"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            value={items.address}
          />
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

      <View style={[styles.container, { marginTop: 60 }]}>
        <BottomSheet
          ref={bs}
          snapPoints={[330, 0]}
          renderContent={renderInner}
          renderHeader={renderHeader}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
        />
        <ScrollView style={{ width: '100%', flex: 1, paddingHorizontal: 10, backgroundColor: 0.1 }}>
          <Animated.View style={{
            margin: 20,
            opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
          }}>

            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{}}
              data={customers}
              renderItem={({ item }) => {
                return <Card items={item} />;
              }}
            />
            <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
              <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </View>

    </ImageBackground>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ca2b20',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#ca2b20',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});