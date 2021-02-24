import React, { Component } from 'react'
import { useHistory } from "react-router-dom";
import PaymentsDatatable from './PaymentsDatatable'
import styled from 'styled-components'

import './PaymentsPage.css'

const CustomButton = styled.button`
  position: absolute;
  width: 150px;
  left: 800px;
  top: 30px;
  height: 40px;
  background: #9595C9;
  color: #fff;
  border-radius: 20px;
  border: none;
`


export default function PaymentsPage(){
let history = useHistory();

  const handleClick = () => {
    history.push("/payments/invoice")
  }

  return (
    <>
      <CustomButton onClick={handleClick}>Generate Invoice</CustomButton>
      <PaymentsDatatable />
    </>
  )
}
