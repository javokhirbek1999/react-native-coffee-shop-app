import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../../features/basketSlice';
import { useNavigation } from '@react-navigation/native';

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

    if (items.length === 0) return null;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('BasketScreen')} style={styles.button}>
                <Text style={styles.itemCount}>{items.length}</Text>
                <Text style={styles.buttonText}>View Orders</Text>
                <Text style={styles.totalAmount}>{basketTotal} PLN</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        zIndex: 50,
        paddingHorizontal: 10,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#00CCBB',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemCount: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        backgroundColor: '#01A296',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    buttonText: {
        flex: 1,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    totalAmount: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default BasketIcon;
