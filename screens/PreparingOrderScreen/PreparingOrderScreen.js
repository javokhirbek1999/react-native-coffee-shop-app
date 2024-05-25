import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Orders');
    }, 4000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.Image
        source={require('../../assets/orderingAnimation.gif')}
        animation="slideInUp"
        iterationCount={1}
        style={styles.image}
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        style={styles.text}
      >
        Waiting for Coffee Shop to accept your order
      </Animatable.Text>
      <Progress.CircleSnail size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00CCBB',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 85,
    width: 85,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PreparingOrderScreen;
