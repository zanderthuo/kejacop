import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReportDate from './ReportDate'
import ReportTitle from './ReportTitle'
import ReportIncome from './ReportIncome'
import ReportExpenses from './ReportExpenses'
import ReportUnitOccupancy from './ReportUnitOccupancy'
import ReportRatings from './ReportRatings'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const PropertyManagerReportsInvoice = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <ReportDate />
      <ReportTitle />
      <ReportIncome />
      <ReportExpenses />
      <ReportUnitOccupancy />
      <ReportRatings />
    </Page>
  </Document>
);

export default PropertyManagerReportsInvoice
