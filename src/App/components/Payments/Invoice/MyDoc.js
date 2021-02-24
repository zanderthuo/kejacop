import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTitle'
import InvoiceNo from './InvoiceNo'
import InvoiceLogo from './InvoiceLogo'
import BillTo from './BillTo'
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableFooter from './InvoiceTableFooter'
import InvoiceTableRow from './InvoiceTableRow'

// Create styles
const styles = StyleSheet.create({
  // page: {
  //   flexDirection: 'row',
  //   backgroundColor: '#E4E4E4'
  // },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <InvoiceTitle />
          <InvoiceNo />
          <InvoiceLogo />
          <InvoiceTableHeader />
          <InvoiceTableRow />
        </View>
      </Page>
    </Document>
);

export default MyDocument
