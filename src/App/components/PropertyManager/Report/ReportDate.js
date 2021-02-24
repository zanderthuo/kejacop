import React from 'react';
import {Text, View, StyleSheet,Font } from '@react-pdf/renderer';



const styles = StyleSheet.create({


      // titleContainer:{
      //     flexDirection: 'row',
      //     marginTop: 14,
      // },
      reportDate:{
          color: '#000000',
          letterSpacing: 4,
          fontSize: 9,
          left: 380,
          textTransform: 'uppercase',
          textAlign: 'center',
          position: 'absolute',
          fontWeight: 'bold',
          top: 10
      }
    });

  const ReportDate = ({title}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportDate}>Friday 24th July, 2020</Text>
    </View>
  );

  export default ReportDate
