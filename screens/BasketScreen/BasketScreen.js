import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../../features/basketSlice';
import { addToOrders } from '../../features/ordersSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';

const BasketScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useMemo(() => {
    const grouppedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(grouppedItems);
  }, [items]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Order</Text>
          <TouchableOpacity onPress={navigation.goBack} style={styles.closeButton}>
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View style={styles.estimatedTime}>
          <Text style={styles.estimatedText}>Estimated time to be ready: 10-15 min</Text>
        </View>

        <ScrollView style={styles.scrollView}>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key} style={styles.itemContainer}>
              <Text style={styles.itemQuantity}>{items.length} x</Text>
              <Image source={{ uri: items[0].image }} style={styles.itemImage} />
              <Text style={styles.itemName}>{items[0]?.name}</Text>
              <Text style={styles.itemPrice}>{items[0]?.price} PLN</Text>
              <TouchableOpacity onPress={() => dispatch(removeFromBasket({ id: key }))}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.orderTotalContainer}>
          <View style={styles.orderTotalRow}>
            <Text style={styles.orderTotalLabel}>Order Total</Text>
            <Text style={styles.orderTotalAmount}>{basketTotal + 5.99} PLN</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              Object.entries(groupedItemsInBasket).forEach(([key, items]) => {
                items.forEach(item => {
                  dispatch(addToOrders({ id: key, item }));
                  dispatch(removeFromBasket(item));
                });
              });
              setGroupedItemsInBasket([]);
              navigation.navigate('PreparingOrderScreen');
            }}
            style={styles.placeOrderButton}
          >
            <Text style={styles.placeOrderText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#00CCBB',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    position: 'relative',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 50,
  },
  estimatedTime: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    marginTop: 16,
  },
  estimatedText: {
    flex: 1,
    fontSize: 16,
  },
  scrollView: {
    borderTopWidth: 1,
    borderTopColor: '#d1d5db',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
  },
  itemQuantity: {
    color: '#00CCBB',
  },
  itemImage: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  itemName: {
    flex: 1,
    fontSize: 16,
  },
  itemPrice: {
    color: '#4b5563',
  },
  removeText: {
    color: '#00CCBB',
    fontSize: 12,
  },
  orderTotalContainer: {
    padding: 16,
    backgroundColor: 'white',
    marginTop: 16,
  },
  orderTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderTotalLabel: {
    fontSize: 16,
  },
  orderTotalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeOrderButton: {
    marginTop: 16,
    backgroundColor: '#00CCBB',
    padding: 16,
    borderRadius: 8,
  },
  placeOrderText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BasketScreen;
