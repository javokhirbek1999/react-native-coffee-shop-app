import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, selectBasketTotal } from '../../features/basketSlice';
import { removeOrder, selectOrderItems } from '../../features/ordersSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';

const OrdersScreen = () => {
  const navigation = useNavigation();
  const orders = useSelector(selectOrderItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Orders</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Restaurant')}
            style={styles.closeButton}
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View style={styles.estimatedTime}>
          <Text style={styles.estimatedText}>Estimated time to be ready: 10-15 min</Text>
        </View>

        <ScrollView style={styles.scrollView}>
          {Object.entries(orders).map((item) => (
            <View key={item[0]} style={styles.orderItem}>
              <Text style={styles.orderQuantity}>{item[1].length} x</Text>
              <Image 
                source={{ uri: item[1][0].image }}
                style={styles.orderImage}
              />
              <Text style={styles.orderName}>{item[1][0]?.name}</Text>
              <Text style={styles.orderPrice}>{item[1][0]?.price} PLN</Text>
              <TouchableOpacity onPress={() => dispatch(removeOrder({ id: item[0] }))}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

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
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
  },
  orderQuantity: {
    color: '#00CCBB',
  },
  orderImage: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  orderName: {
    flex: 1,
    fontSize: 16,
  },
  orderPrice: {
    color: '#4b5563',
  },
  cancelText: {
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
});

export default OrdersScreen;
