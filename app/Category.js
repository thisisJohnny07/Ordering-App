import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import FoodCategory from './components/FoodCategory'; 

const Category = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>List of Categories</Text>
      <View style={styles.categoryList}>
        <FoodCategory /> 
      </View>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 60, 
    
  },
  categoryList: {
    marginTop: 10,
  },
});