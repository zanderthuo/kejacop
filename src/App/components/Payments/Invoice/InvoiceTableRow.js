import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#000000'
const styles = StyleSheet.create({
    row: {
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
      top: 325,
      left: 75,
      width: 450,
    },
    description: {
        width: '35%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    price: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    month: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingRight: 8,
    },
    amount: {
        width: '20%',
        borderRightColor: borderColor,
    },
  });


const InvoiceTableRow = () => (
        <View style={styles.row}>
            <Text style={styles.description}>hi</Text>
            <Text style={styles.price}>Ksh.10,000</Text>
            <Text style={styles.month}>January</Text>
            <Text style={styles.amount}>677</Text>
        </View>
);

export default InvoiceTableRow
