import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';

const FoodAdded = () => {
 
  const cartItems = [
    { id: '1', name: 'Chocolate Almond Danish Almond', price: 230.0, quantity: 2},
    { id: '3', name: 'Cinnamon Swirl Roll', price: 669.69, quantity: 2},
  ];

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sales Order</Text>

      
      <View style={styles.customerRow}>
        <View style={styles.customer}>
          <Text style={styles.label}>Customer Name</Text>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.table}>
          <Text style={styles.label}>Table Number</Text>
       
        </View>
      </View>

     
      <View style={styles.foodHeader}>
        <Text style={styles.foodHeaderText}>Qty</Text>
        <Text style={[styles.foodHeaderText, styles.descriptionColumn]}>Description</Text>
        <Text style={styles.foodHeaderText}>Price</Text>
      </View>

     
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemQuantity}>{item.quantity}</Text>
            <Text style={[styles.itemName, styles.descriptionColumn]}>{item.name}</Text>
            <Text style={styles.itemPrice}>₱ {item.price.toFixed(2)}</Text>
          </View>
        )}
      />

      
      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotalText}>Subtotal:</Text>
        <Text style={styles.subtotalAmount}>₱ {calculateSubtotal()}</Text>
      </View>

     
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FoodAdded;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'start',
  },
  customerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  customer: {
    flex: 1,
    marginRight: 20,
   
  },
  
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  input: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  foodHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#7F7F7F',
    paddingTop: 5,
    marginBottom: 20,
  },
  foodHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    flex: 1,
    textAlign: 'center',
  },
  descriptionColumn: {
    flex: 2,
    textAlign: 'left',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  itemName: {
    fontSize: 14,
    color: '#333',
    flex: 2,
    textAlign: 'left',
  },
  itemPrice: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#7F7F7F',
    marginBottom: 20,
  },
  subtotalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtotalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#E9191C',
    padding: 15,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#0E315D',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});