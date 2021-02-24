import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#000000'
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        borderBottomColor: '#000000',
        backgroundColor: '#E5E5E5',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
        top: 300,
        left: 75,
        width: 450,
    },
    description: {
        width: '35%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    price: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    month: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    amount: {
        width: '20%',
        borderRightColor: borderColor,
    },
  });

  const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.description}>Description</Text>
        <Text style={styles.price}>Unit Price</Text>
        <Text style={styles.month}>Month</Text>
        <Text style={styles.amount}>Amount</Text>
    </View>
  );

  export default InvoiceTableHeader
