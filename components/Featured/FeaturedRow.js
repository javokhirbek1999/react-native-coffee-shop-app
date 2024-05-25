import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {/* RestaurantCards */}
        <RestaurantCard
          id={123}
          imgUrl="https://scontent.cdninstagram.com/v/t51.29350-15/242935688_6148522055189392_5435827280751434809_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=jD5GinI0ZS8Q7kNvgGw8bb1&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjY3MTg3Njc1ODMzNTMyMTc4Mg%3D%3D.2-ccb7-5&oh=00_AYDfVK5K8yMEj_Cvty-bWMwWW_NXWnTD-XHrFR6mFrwUJQ&oe=66510767&_nc_sid=10d13b"
          title="Shabby Coffee"
          rating={4.5}
          address="Piwna 20/26, 00-265 Warszawa"
          short_description="One of the best coffee in the town."
          dishes={[]}
          lat={52.24878836333262}
          long={21.01232698340233}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://lh3.googleusercontent.com/p/AF1QipNkr5Wre-LUJ0_vPdjj-r5imzMUC-XC9-vRQAti=s1360-w1360-h1020"
          title="Cafe Kafka"
          rating={4.3}
          address="Oboźna 3, 00-340 Warszawa"
          short_description="Different coffees with different flavours"
          dishes={[]}
          lat={52.23963345837809}
          long={21.022736535623643}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://lh3.googleusercontent.com/p/AF1QipOrD5KL9IVcytrkpgwrg1dgzTAMpj1UYQ7IwHOn=s1360-w1360-h1020"
          title="El Cafetero Cafe"
          rating={4.5}
          address="Marszałkowska 27/35, 00-639 Warszawa"
          short_description="Uzbek traditional restaurant"
          dishes={[]}
          lat={52.218917612784445}
          long={21.017949181547422}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    paddingHorizontal: 15,
    color: 'gray',
    marginBottom: 10,
  },
  scrollViewContent: {
    paddingHorizontal: 15,
  },
  scrollView: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default FeaturedRow;
