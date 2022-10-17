import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../model/colors';
import packages from '../model/packages';
import { ScrollView } from 'react-native-gesture-handler';
const width = Dimensions.get('window').width - 30;

const PackageListScreen = ({ navigation }) => {

    const Card = ({ packages }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('PackagesScreen', packages)}>
                <View style={styles.card}>
                    <ImageBackground source={packages.image} style={{ flex: 1 }} resizeMode='stretch'>
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
            <ScrollView style={{ width: '100%', flex: 1, paddingHorizontal: 15, marginTop: 80 }}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                    }}
                    data={packages}
                    renderItem={({ item }) => {
                        return <Card packages={item} />;
                    }}
                />

            </ScrollView>
        </ImageBackground>
    );
};

export default PackageListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
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
        marginTop: 30,
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
        width: 130,
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
    card: {
        height: 225,
        backgroundColor: COLORS.light,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
        marginTop: 10
    },
});