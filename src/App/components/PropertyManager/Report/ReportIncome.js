import React from 'react';
import {Text, View, StyleSheet,Font } from '@react-pdf/renderer';



const styles = StyleSheet.create({

    // titleContainer:{
    //     flexDirection: 'row',
    //     marginTop: 24,
    // },
    reportIncome:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 14,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        top: 90,
    },
    reportPaidRent:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        top: 120,
    },
    reportPendingRent:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        position: 'absolute',
        top: 135,
    },
    reportTotalIncome:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        position: 'absolute',
        top: 160,
    }
  });


  const ReportIncome = ({title}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportIncome}>Income</Text>
        <Text style={styles.reportPaidRent}>Paid Rent - Ksh. 400,000</Text>
        <Text style={styles.reportPendingRent}>Unpid Rent - Ksh. 20,000</Text>
        <Text style={styles.reportTotalIncome}>Total Income - Ksh. 100,000  </Text>
    </View>
  );

  export default ReportIncome
