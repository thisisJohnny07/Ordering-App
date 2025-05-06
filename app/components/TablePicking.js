import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import React, { useState } from 'react';

const TablePicking = () => {
  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const occupiedTables = [6, 10, 15, 17]; 
  const [selectedTab, setSelectedTab] = useState('All'); 
  const [modalVisible, setModalVisible] = useState(false); 
  const [selectedTable, setSelectedTable] = useState(null); 

  const handleTablePress = (table) => {
    setSelectedTable(table); 
    setModalVisible(true); 
  };

  const closeModal = () => {
    setModalVisible(false); 
    setSelectedTable(null); 
  };

  const filteredTables = tables.filter((table) => {
    if (selectedTab === 'Available') {
      return !occupiedTables.includes(table); 
    } else if (selectedTab === 'Occupied') {
      return occupiedTables.includes(table); 
    }
    return true; 
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Table</Text>

      {/* Tabs for filtering */}
      <View style={styles.tabsContainer}>
        {['All', 'Available', 'Occupied'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab && styles.activeTab,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText, 
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Table grid */}
      <View style={styles.tableContainer}>
        {filteredTables.map((table, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tableBox,
              occupiedTables.includes(table) && styles.occupiedTableBox, 
            ]}
            onPress={() => handleTablePress(table)}
            disabled={occupiedTables.includes(table)} 
          >
            <Text
              style={[
                styles.tableNumber,
                occupiedTables.includes(table) && styles.occupiedTableNumber, 
              ]}
            >
              {table}
            </Text>
            <Image
              source={require('../../assets/images/table.png')} 
              style={styles.tableImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Type of Transaction</Text>

            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Add Order</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>View Order</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Change Table</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TablePicking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'start',
    marginBottom: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A7A9AB',
    borderRadius: 8,
    backgroundColor: '#F9FCFF',
    marginBottom: 30,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#0E315D',
    borderRadius: 6,
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  activeTabText: {
    color: '#F9FCFF',
  },
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tableBox: {
    width: '23%',
    aspectRatio: 0.9,
    backgroundColor: '#F9FCFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A7A9AB',
    marginBottom: 16,
  },
  occupiedTableBox: {
    backgroundColor: '#9AA9BB',
    borderColor: '#A7A9AB',
  },
  tableNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  
  tableImage: {
    width: 40,
    height: 40,
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
    padding: 35,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  modalButton: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#A7A9AB',
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0E315D',
  },
  closeButton: {
    width: '100%',
    padding: 10,
    backgroundColor: '#FF4D4D',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});