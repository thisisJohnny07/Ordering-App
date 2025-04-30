import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';

const FoodSelection = () => {
  
  const foodItems = [
    { id: '1', name: 'Burger', price: 230.0 },
    { id: '2', name: 'Pizza', price: 460.0 },
    { id: '3', name: 'Pasta', price: 120.0 },
    { id: '4', name: 'Salad', price: 80.0 },
  ];

  const [selectedFood, setSelectedFood] = useState(null); 
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1); 

  const handleFoodPress = (item) => {
    setSelectedFood(item);
    setQuantity(1); 
    setModalVisible(true); 
  };

  const closeModal = () => {
    setModalVisible(false); 
    setSelectedFood(null); 
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1); 
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); 

  const renderFoodItem = ({ item }) => (
    <TouchableOpacity style={styles.foodItem} onPress={() => handleFoodPress(item)}>
      <Text style={styles.foodName}>{item.name}</Text>
      <View style={styles.foodPriceContainer}>
        <Text style={styles.foodPrice}>₱ {item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={foodItems}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.id}
        numColumns={4} 
        columnWrapperStyle={styles.row} 
        showsVerticalScrollIndicator={false}
      />

     
      {selectedFood && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <View style={styles.foodSelected}>
              <Text style={styles.modalTitle}>{selectedFood.name}</Text>
              <Text style={styles.modalPrice}>₱ {selectedFood.price.toFixed(2)}</Text>
              </View>

             
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <View style={styles.foodQuantity}>
                <Text style={styles.quantityText}>{quantity}</Text>
                </View>
                <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>

             
              <Text style={styles.totalText}>
                Total: ₱ {(selectedFood.price * quantity).toFixed(2)}
              </Text>

             
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addToCartButton}>
                  <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default FoodSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
    paddingBlockStart: 60,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  foodItem: {
    backgroundColor: '#FFFFFF',
    width: '24%',
    height: 120,
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#9A9A9A',
    marginBottom: 10,
  },
  foodName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  foodPriceContainer: {
    backgroundColor: '#73A4DE',
    width: '100%',
    borderRadius: 8,
    height: 30,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  foodPrice: {
    fontSize: 12,
    color: '#ffffff', 
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    
    padding: 30,
    alignItems: 'center',
  },

  foodSelected: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 0.8,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 50,
    
  },
  modalPrice: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    marginTop: 50,
    marginBottom: 10,
    
    width: 100,
    height: 30,
   
  
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    
  },

  foodQuantity: {
    width: '60%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
   borderWidth: 1,
    borderRadius: 5,
   marginHorizontal: 10,
  },
  quantityButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,

  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },

  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#FF4D4D',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#73A4DE',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});