import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Restaurant', {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        })
      }
      style={styles.cardContainer}>
      <Image source={{ uri: imgUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.ratingContainer}>
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <View style={styles.addressContainer}>
          <MapPinIcon color="grey" opacity={0.4} size={22} />
          <Text style={styles.addressText}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    marginRight: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 120,
    width: 200,
    borderRadius: 5,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
  ratingText: {
    fontSize: 12,
    color: 'grey',
    paddingLeft: 3,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
  addressText: {
    fontSize: 12,
    color: 'grey',
    paddingLeft: 3,
  },
});

export default RestaurantCard;
