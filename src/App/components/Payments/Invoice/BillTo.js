import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36
    },
    billTo: {
      color: '#000000',
      fontSize: 13,
      left: -110,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      top: 140,
      marginTop: 20,
      paddingBottom: 3,
      fontWeight: 'bold',
    },
    billToInfo: {
      color: '#000000',
      fontSize: 10,
      left: -110,
      textTransform: 'uppercase',
      top: 140,
      marginTop: 20,
    }
  });


  const BillTo = () => (
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}><b>Bill To:</b> {"\n"}</Text>
        <Text style={styles.billToInfo}>Alfred Odhiambo, {"\n"} +254719808225 ,{"\n"} alfredodhiambo@gmail.com, {"\n"} Ramra Apartments</Text>
    </View>
  );

  export default BillTo
