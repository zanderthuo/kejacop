import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    labelInvoiceNo: {
        width: 60,
        left: -20,
        top: 65,
        fontSize: 13
    },
    labelDate: {
        width: 60,
        left: -20,
        top: -15,
        fontSize: 13
    },

  });


  const InvoiceNo = () => (
      <>
        <View style={styles.invoiceNoContainer}>
            <Text style={styles.labelInvoiceNo}>Invoice No:{"\n"}FEJF45NE</Text>
        </View >
        <View style={styles.invoiceDateContainer}>
            <Text style={styles.labelDate}>Date:{"\n"} 2020-03-13</Text>
        </View >
      </>
  );

  export default InvoiceNo
