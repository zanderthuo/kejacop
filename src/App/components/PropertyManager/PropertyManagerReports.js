import React from 'react'
import PropertyManagerReportsDatatable from './PropertyManagerReportsDatatable'
import GenerateInvoiceButton from './GenerateInvoiceButton'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CustomButton = styled.button`
  position: absolute;
  width: 150px;
  left: 750px;
  top: -50px;
  height: 40px;
  background: #9595C9;
  color: #fff;
  border-radius: 20px;
  border: none;
`

const PropertyManagerReports = () => {
  return (
    <div>
      <Link to="/propertymanager" style={{color: 'black'}}><i class="fa fa-arrow-left">Back</i></Link>
      <GenerateInvoiceButton />
      <PropertyManagerReportsDatatable />
    </div>
  )
}

export default PropertyManagerReports
