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
        left: 190,
        textTransform: 'uppercase',
        textAlign: 'center',
        position: 'absolute',
        fontWeight: 'bold',
    },
    reportTitlePeriod:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 10,
        left: 240,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        position: 'absolute',
        top: 40,
    }
  });


  const ReportTitle = ({title}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>Ramra Apartments</Text>
        <Text style={styles.reportTitlePeriod}>Period-May 2020</Text>
    </View>
  );

  export default ReportTitle
