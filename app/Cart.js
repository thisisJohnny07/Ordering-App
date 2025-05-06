import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import FoodAdded from './components/FoodAdded';

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FoodAdded /> 
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 25,
    paddingTop: 10,
  },
 
});