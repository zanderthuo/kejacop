import React from 'react'
import {PDFViewer,PDFDownloadLink} from '@react-pdf/renderer'
import PropertyManagerReportsInvoice from './PropertyManagerReportsInvoice';

const InvoiceGenerate = () => {
  return (
    <div>
      <PDFViewer width="1000" height="600" className="app" >
        <PropertyManagerReportsInvoice />
      </PDFViewer>
    </div>
  )
}

export default InvoiceGenerate
