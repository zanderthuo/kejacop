import React from 'react';
import { Image, View, StyleSheet } from '@react-pdf/renderer';
import logo from '../../../../../src/assets/images/PropMeta.png'

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36
    },
    img: {
        position: "absolute",
        width: 50,
        height: 50,
        left: 480,
        top: -150
    },
  });


const InvoiceLogo = ({InvoiceData}) => (
  <View style={styles.headerContainer}>
      <Image style={styles.img} src={logo} />
  </View>
);

export default InvoiceLogo
