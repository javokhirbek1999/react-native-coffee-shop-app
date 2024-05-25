import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsById } from '../../features/basketSlice';

const CoffeeRow = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector(state => selectBasketItemsById(state, id));

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (items.length < 1) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        style={[styles.container, isPressed && styles.containerActive]}
      >
        <View style={styles.rowContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price} PLN</Text>
          </View>
          <View>
            <Image
              source={{ uri: image }}
              style={styles.image}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={removeItemFromBasket}
            disabled={items.length === 0}
          >
            <MinusCircleIcon
              color={items.length > 0 ? '#00CCBB' : 'gray'}
              size={40}
            />
          </TouchableOpacity>
          <Text style={styles.quantity}>{items.length}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon color="#00CCBB" size={40} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 10,
    marginBottom: 10,
  },
  containerActive: {
    borderBottomWidth: 0,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: 'gray',
    marginBottom: 5,
  },
  price: {
    color: 'gray',
  },
  image: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#F3F3F4',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },
  quantity: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CoffeeRow;
