import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const CustomReportButton = styled.button`
  width: 80px;
  height: 30px;
  background: #9595C9;
  border-radius: 20px;
  border: none;
`

const handleClick = () => {
  console.log('hello')
}

const ReportButton = () => {
  return (
    <CustomReportButton className="fa fa-wpforms" style={{color: '#fff'}}><Link to="/propertymanager/report" style={{color: '#fff'}}> Report</Link></CustomReportButton>
  )
}

export default ReportButton
