import React from 'react';
import {Text, View, StyleSheet,Font } from '@react-pdf/renderer';



const styles = StyleSheet.create({

    titleContainer:{
        flexDirection: 'row',
        marginTop: 24,
    },
    reportTitle:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 20,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
    },
    reportTitleAddress:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 10,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        top: 90,
    }
  });


  const InvoiceTitle = ({title}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>Invoice</Text>
        <Text style={styles.reportTitleAddress}>Propmeta Limited,{"\n"} 7th Floor, Hadsa Building,{"\n"} Moi Avenue, {"\n"} +254709234234 {"\n"} info@propmeta.com</Text>
    </View>
  );

  export default InvoiceTitle
