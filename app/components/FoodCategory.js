import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const FoodCategory = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    navigation.navigate('FoodSelection', { category }); // Navigate to FoodSelection
  };

  const categories = ['All', 'Breakfast', 'Drinks', 'Lunch', 'Dinner', 'Snacks'];

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.categoryButton}
          onPress={() => handleCategoryPress(category)}
        >
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FoodCategory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  categoryButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A7A9AB',
    width: '48%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0E315D',
  },
});