import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TextInput, TouchableOpacity, Animated, ImageBackground, Image } from 'react-native';
import Carousel from '../components/Carousel';
import { dummyData } from '../model/Data';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../model/colors';
import now_videos from '../model/now_videos';
import trailer_videos from '../model/trailer_videos';
import opening_videos from '../model/opening_videos';

import { ScrollView } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width / 2;

const full_width = Dimensions.get('window').width;

const VideoListScreen = ({ navigation }) => {

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

    const NowInCard = ({ videos }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('VideoDetailScreen', videos)}>
                <ImageBackground style={styles.rmCardImage} source={videos.thumbnail}>
                    <View style={{ width: 80, height: 30, backgroundColor: '#fd2a8f', padding: 7, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', marginTop: 200 }}>
                        <Text
                            style={{
                                color: COLORS.white,
                                fontSize: 12,
                                fontWeight: 'bold',
                            }}>
                            IMDB {videos.imdb}
                        </Text>
                    </View>

                </ImageBackground>
                <View
                    style={{
                        flex: 1,
                        width: 180,
                        height: 50,
                        backgroundColor: '#4048BF',
                        justifyContent: 'center',
                        opacity: 0.3,
                        paddingLeft: 10
                    }}>
                    <View style={{ width: '100%', flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: COLORS.white, fontFamily: 'Avenir', }}>
                                {videos.name}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: COLORS.white, fontFamily: 'Avenir', }}>
                                {videos.type}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    const TrailerCard = ({ videos }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('VideoDetailScreen', videos)}>
                <ImageBackground style={styles.packageCard} source={videos.thumbnail}>
                    <Icon name="play-circle-outline" size={50} color={COLORS.white} style={{}} />
                </ImageBackground>
            </TouchableOpacity>
        );
    };
    const OpeningCard = ({ videos }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('VideoDetailScreen', videos)}>


                <View style={[styles.premierCard, { flexDirection: 'row', justifyContent: 'space-between', }]}>

                    <Image source={videos.thumbnail} resizeMode='contain' style={{ flex: 1, width: 75, }}></Image>
                    <View style={{ justifyContent: 'column', width: 240, marginRight: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 11, color: '#05375a', fontFamily: 'Avenir', }}>
                            {videos.name}
                        </Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 11, color: COLORS.light, fontFamily: 'Avenir', backgroundColor: '#fd2da3', width: 23, borderRadius: 3, padding: 3 }}>
                            {videos.imdb}
                        </Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 11, color: '#05375a', fontFamily: 'Avenir', }}>
                            {videos.type}
                        </Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 11, color: '#05375a', fontFamily: 'Avenir', }}>
                            {videos.description}
                        </Text>
                    </View>
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
            <ScrollView style={{ width: '100%', flex: 1, paddingHorizontal: 10, backgroundColor: 0.1, marginTop: 70 }}>


                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.sectionTitle}>Now in cinemas</Text>
                    <FlatList
                        snapToInterval={width - 20}
                        contentContainerStyle={{}}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={now_videos}
                        renderItem={({ item }) => <NowInCard videos={item} />}
                    />
                    <Text style={styles.sectionTitle}>Trailers</Text>
                    <FlatList
                        snapToInterval={width - 20}
                        contentContainerStyle={{}}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={trailer_videos}
                        renderItem={({ item }) => <TrailerCard videos={item} />}
                    />
                    <Text style={styles.sectionTitle}>Opening this week</Text>
                    <FlatList
                        contentContainerStyle={{ width: '100%' }}
                        data={opening_videos}
                        renderItem={({ item }) => {
                            return <OpeningCard videos={item} />;
                        }}
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
        backgroundColor: '#fd2a8f',
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
        width: width - 10,
        height: 250,
        marginRight: 20,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
        marginBottom: 10
    },
    packageCard: {
        width: width - 10,
        height: 130,
        marginRight: 20,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
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
    sectionTitle: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ff1b38',
    },
});

export default VideoListScreen;