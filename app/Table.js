import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import TablePicking from './components/TablePicking';

const Table = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TablePicking />
    </SafeAreaView>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});