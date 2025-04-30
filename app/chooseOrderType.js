import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import BottomNavigation from './bottomNavigation';

const ChooseOrderType = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleSelection = () => {
    navigation.replace('bottomNavigation'); // Navigate to the sidebar navigation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose Order Type</Text> {/* Title */}

      {/* Dine In Button */}
      <TouchableOpacity style={styles.button} onPress={handleSelection}>
        <Text style={styles.buttonText}>DINE IN</Text>
      </TouchableOpacity>

      {/* Take Out Button */}
      <TouchableOpacity style={styles.button} onPress={handleSelection}>
        <Text style={styles.buttonText}>TAKE OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseOrderType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 100,
  },
  button: {
    width: 200,
    height: 60,
    borderColor: '#A7A9AB',
    borderWidth: 1,
    backgroundColor: '#F9FCFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '900',
  },
});