import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const FoodAdded = () => {
  return (
    
     <SafeAreaView style={styles.container}>
          
          <Text> Sales Order</Text>
        </SafeAreaView>
  )
}

export default FoodAdded

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingTop: 30,
      },
      
})