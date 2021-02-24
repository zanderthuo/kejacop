import React from 'react';
import {Text, View, StyleSheet,Font } from '@react-pdf/renderer';



const styles = StyleSheet.create({

    // titleContainer:{
    //     flexDirection: 'row',
    //     marginTop: 24,
    // },
    reportRatings:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 14,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        top: 500,
    },
    reportPropertyRating:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        top: 530,
    },
    reportWater:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        position: 'absolute',
        top: 550,
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
        top: 570,
    },
    reportSecurity:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        position: 'absolute',
        top: 590,
    },
    reportDrainage:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        position: 'absolute',
        top: 610,
    },
    reportParking:{
        color: '#000000',
        letterSpacing: 4,
        fontSize: 8,
        left: 10,
        textTransform: 'uppercase',
        position: 'absolute',
        fontWeight: 'bold',
        position: 'absolute',
        top: 630,
    },
  });


  const ReportRatings = ({title}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportRatings}>Ratings</Text>
          <Text style={styles.reportPropertyRating}>Property Rating - 4</Text>
        <Text style={styles.reportWater}>Water- 3</Text>
        <Text style={styles.reportElectricity}>Electricity  - 4</Text>
        <Text style={styles.reportSecurity}>Security - 2</Text>
        <Text style={styles.reportDrainage}>Drainage - 3</Text>
        <Text style={styles.reportParking}>Parking- 5</Text>
    </View>
  );

  export default ReportRatings
