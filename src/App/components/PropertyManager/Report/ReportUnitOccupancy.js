import React from 'react';
import {Text, View, StyleSheet,Font } from '@react-pdf/renderer';



const styles = StyleSheet.create({

    // titleContainer:{
    //     flexDirection: 'row',
    //     marginTop: 24,
    // },
    reportUnitOccupancy:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 14,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        top: 400,
    },
    reportOccupied:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        top: 420,
    },
    reportPendingRent:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        position: 'absolute',
        top: 435,
    },
    reportTotalIncome:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        position: 'absolute',
        top: 460,
    }
  });


  const ReportUnitOccupancy = ({title}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportUnitOccupancy}>Unit Occupancy</Text>
        <Text style={styles.reportOccupied}>Occupied - 28</Text>
        <Text style={styles.reportPendingRent}>Vacant - 2</Text>
        <Text style={styles.reportTotalIncome}>Total No of Units - 30  </Text>
    </View>
  );

  export default ReportUnitOccupancy
