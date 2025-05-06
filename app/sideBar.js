import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, Animated, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  sidebar: {
    width: '50%',
    height: '100%',
    backgroundColor: '#0E315D',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    left: 0,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,

  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    backgroundColor: '#5C8C9D',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileRole: {
    fontSize: 14,
    color: '#D1D5DB',
  },
  divider: {
    height: 1,
    backgroundColor: '#D1D5DB',
    marginVertical: 20,
  },
  sidebarItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sidebarIcon: {
    marginRight: 15,
  },
  sidebarItemText: {
    fontSize: 16,
    color: '#ffffff',
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#3B82F6',
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default function Sidebar({ isVisible, toggleSidebar }) {
  const [slideAnim] = useState(new Animated.Value(-300)); 
  const navigation = useNavigation(); 

  useEffect(() => {
    if (isVisible) {
      
      Animated.timing(slideAnim, {
        toValue: 0, 
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
    
      Animated.timing(slideAnim, {
        toValue: -300, 
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isVisible]);

  const handleLogout = () => {
    toggleSidebar(); 
    navigation.navigate('index');
  };

  return (
    <Modal animationType="none" transparent={true} visible={isVisible} onRequestClose={toggleSidebar}>
      <Pressable style={styles.modalContainer} onPress={toggleSidebar}>
        <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
          {/* Profile Section */}
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/80' }} 
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Juan Dela Cruz</Text>
            <Text style={styles.profileRole}>Crew</Text>
          </View>

          <View style={styles.divider} />

          {/* Sidebar Items */}
          <View style={styles.sidebarItemContainer}>
            <Ionicons name="home-outline" size={20} color="#ffffff" style={styles.sidebarIcon} />
            <Text style={styles.sidebarItemText}>Home</Text>
          </View>
          <View style={styles.sidebarItemContainer}>
            <Ionicons name="save-outline" size={20} color="#ffffff" style={styles.sidebarIcon} />
            <Text style={styles.sidebarItemText}>Save Order</Text>
          </View>
          <View style={styles.sidebarItemContainer}>
            <Ionicons name="receipt-outline" size={20} color="#ffffff" style={styles.sidebarIcon} />
            <Text style={styles.sidebarItemText}>Receipt</Text>
          </View>
          <View style={styles.sidebarItemContainer}>
            <Ionicons name="refresh-outline" size={20} color="#ffffff" style={styles.sidebarIcon} />
            <Text style={styles.sidebarItemText}>Refresh</Text>
          </View>
          <View style={styles.sidebarItemContainer}>
            <Ionicons name="person-outline" size={20} color="#ffffff" style={styles.sidebarIcon} />
            <Text style={styles.sidebarItemText}>Change Type</Text>
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Log out</Text>
          </TouchableOpacity>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}