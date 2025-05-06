import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, ScrollView, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'; 

const FoodSelection = () => {
  const foodItems = [
    { id: '1', name: 'Burger', price: 230.0, image: require('../../assets/images/danishbread.png') },
    { id: '2', name: 'Pizza', price: 460.0, image: require('../../assets/images/danishbread.png') },
    { id: '3', name: 'Pasta', price: 120.0, image: require('../../assets/images/danishbread.png') },
    { id: '4', name: 'Salad', price: 80.0, image: require('../../assets/images/danishbread.png') },
  ];

  const categories = ['All', 'Breakfast', 'Drinks', 'Lunch', 'Dinner', 'Snacks'];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFood, setSelectedFood] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

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

  const filteredFoodItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderFoodItem = ({ item }) => (
    <TouchableOpacity style={styles.foodItem} onPress={() => handleFoodPress(item)}>
      {/* Food Name */}
      <Text style={styles.foodName}>{item.name}</Text>

      {/* Food Image */}
      <Image source={item.image} style={styles.foodImage} resizeMode="contain" />

      {/* Food Price */}
      <View style={styles.foodPriceContainer}>
        <Text style={styles.foodPrice}>₱ {item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="#A7A9AB" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      <View style={styles.theTabContainer}>
        {/* Tabs for Food Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.tab,
                selectedCategory === category && styles.tabSelected, 
              ]}
              onPress={() => handleCategoryPress(category)}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedCategory === category && styles.tabTextSelected, 
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Food Items */}
      <FlatList
        data={filteredFoodItems}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.id}
        numColumns={4}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />

      {/* Modal for Food Details */}
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
                 {/* Food Image */}
        <Image
          source={selectedFood.image} 
          style={styles.modalFoodImage} 
          resizeMode="contain"
        />
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

              <View style={styles.totalConatiner}>
                <Text style={styles.totalText}>
                  Total: ₱ {(selectedFood.price * quantity).toFixed(2)}
                </Text>
              </View>

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
    backgroundColor: '#ffffff',
    paddingBlockStart: 10,
   
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A7A9AB',
    borderRadius: 25,
   marginHorizontal: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  searchIcon: {
    marginRight: 8,
  },

  searchBar: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },

  theTabContainer: {
    marginBottom: 15,
    marginLeft: 10,
  },

  tab: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#A7A9AB',
    height: 30,
  },

  tabSelected: {
    backgroundColor: '#A3C3EA',
    borderColor: '#A3C3EA',
  },

  foodImage: {
    width: 50,
    height: 50,
    marginVertical: 2,
    marginLeft: 5,
    borderRadius: 8,
  },
  modalFoodImage: {
    width: 150,
    height: 110, 
  }, 
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },

  tabTextSelected: {
    color: '#FFFFFF',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  foodItem: {
    backgroundColor: '#FFFFFF',
    width: '23.5%',
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
    backgroundColor: '#A3C3EA',
    width: '100%',
    borderRadius: 8,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodPrice: {
    fontSize: 12,
    
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
    marginBottom: 18,
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
  totalConatiner: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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