import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Dimensions, TextInput, TouchableOpacity, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../model/colors';
import payments from '../model/payments';
const width = Dimensions.get('window').width - 30;

const PaymentConfirmScreen = ({ navigation }) => {

    const [selectedRegionValue, setSelectedRegionValue] = useState("disabled");
    const [selectedTownshipValue, setSelectedTownshipValue] = useState("disabled");
    const Card = ({ items }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { }}>
                <View style={styles.card}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(245, 42, 42,0.2)',
                            }}>
                            <Icon
                                name="credit-card-check-outline"
                                size={50}
                                color={COLORS.red}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                            Confirm your payment
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                            Package Name :
                        </Text>
                        <TextInput
                            placeholder='Package Name'
                            style={styles.textInput}
                            autoCapitalize='none'
                            value={items.package_name}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                            Price :
                        </Text>
                        <TextInput
                            placeholder='Price'
                            style={styles.textInput}
                            autoCapitalize='none'
                            value={items.price}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                            Name :
                        </Text>
                        <TextInput
                            placeholder='Name'
                            style={styles.textInput}
                            autoCapitalize='none'
                            value={items.name}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                            Device ID :
                        </Text>
                        <TextInput
                            placeholder='Device ID'
                            style={styles.textInput}
                            autoCapitalize='none'
                            value={items.device_id}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                            Phone :
                        </Text>
                        <TextInput
                            placeholder='Phone Number'
                            style={styles.textInput}
                            autoCapitalize='none'
                            value={items.phone}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                            Region :
                        </Text>
                        <Picker selectedValue={selectedRegionValue} onValueChange={(itemValue, itemIndex) => setSelectedRegionValue(itemValue)} style={{ height: 20, color: '#05375a', marginRight: 15 }} >
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
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                            Township :
                        </Text>
                        <Picker selectedValue={selectedTownshipValue} onValueChange={(itemValue, itemIndex) => setSelectedTownshipValue(itemValue)} style={{ height: 20, color: '#05375a', marginRight: 15 }} >
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
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                            Address :
                        </Text>
                        <TextInput
                            placeholder='Address'
                            style={styles.textInput}
                            autoCapitalize='none'
                            value={items.address}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                            Payment Screenshot :
                        </Text>
                        <TouchableOpacity
                            onPress={() => { }}
                            style={{
                                borderColor: '#ca2b20',
                                borderWidth: 1,
                                width: 100,
                                height: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 5,
                                marginRight: 15
                            }}
                        >
                            <Text style={{ color: '#ca2b20', fontSize: 13, fontWeight: 'bold' }}>Upload Files</Text>
                        </TouchableOpacity>
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
                data={payments}
                renderItem={({ item }) => {
                    return <Card items={item} />;
                }}
            />
            <View
                style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 150,
                }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("PaymentSuccessScreen")}
                    style={[styles.signIn, {
                        backgroundColor: '#ca2b20',
                        borderColor: '#fff',
                        borderWidth: 1,
                    }]}
                >
                    <Text style={[styles.textSign, { color: '#fff' }]}>Confirm</Text>
                </TouchableOpacity>
            </View>
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
        height: 400,
        backgroundColor: COLORS.light,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
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
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
        textAlign: 'right',
        marginRight: 15,
        height: 20,
    },
});

export default PaymentConfirmScreen;