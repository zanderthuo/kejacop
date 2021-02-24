import React from 'react';
import { Page, Document, Image, StyleSheet } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTitle'
import BillTo from './BillTo'
import InvoiceNo from './InvoiceNo'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceThankYouMsg from './InvoiceThankYouMsg'


const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
  });


  const Invoice = ({InvoiceData}) => (
    <>
      <Document>
          <Page size="A4" style={styles.page}>
              <InvoiceTitle title='Invoice'/>
              <InvoiceNo InvoiceData={InvoiceData}/>
              <BillTo InvoiceData={InvoiceData}/>
              <InvoiceItemsTable InvoiceData={InvoiceData} />
              <InvoiceThankYouMsg />
          </Page>
      </Document>
    </>
        );
  export default Invoice
