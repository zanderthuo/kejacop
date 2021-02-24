import React from 'react'
import {PDFViewer} from '@react-pdf/renderer'
import MyDocument from './MyDoc';

const InvoiceGenerate = () => {
  return (
    <div>
      <PDFViewer width="1000" height="600">
        <MyDocument />
      </PDFViewer>
    </div>
  )
}

export default InvoiceGenerate
