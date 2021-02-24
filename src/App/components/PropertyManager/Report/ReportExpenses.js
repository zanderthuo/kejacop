import React from 'react';
import {Text, View, StyleSheet,Font } from '@react-pdf/renderer';



const styles = StyleSheet.create({

    // titleContainer:{
    //     flexDirection: 'row',
    //     marginTop: 24,
    // },
    reportExpenses:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 14,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        top: 200,
    },
    reportWater:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        top: 230,
    },
    reportElectricity:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        position: 'absolute',
        top: 250,
    },
    reportDoneMaintenance:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        position: 'absolute',
        top: 270,
    },
    reportPendingMaintenance:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        position: 'absolute',
        top: 290,
    },
    reportCleaningService:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        position: 'absolute',
        top: 310,
    },
    reportCaretakerSalary:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        position: 'absolute',
        top: 330,
    },
    reportTotal:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        position: 'absolute',
        top: 370,
    },
  });


  const ReportExpenses = ({title}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportExpenses}>Expenses</Text>
        <Text style={styles.reportWater}>Water - Ksh. 10,000</Text>
        <Text style={styles.reportElectricity}>Electricity - Ksh. 20,000</Text>
        <Text style={styles.reportDoneMaintenance}>Done Maintenance - Ksh. 20,000</Text>
        <Text style={styles.reportPendingMaintenance}>Pending Maintenance - Ksh. 10,000</Text>
        <Text style={styles.reportCleaningService}>Cleaning Service - Ksh. 20,000</Text>
        <Text style={styles.reportCaretakerSalary}>Caretaker Salary- Ksh. 20,000</Text>
        <Text style={styles.reportTotal}>Total Income - Ksh. 100,000</Text>
    </View>
  );

  export default ReportExpenses
