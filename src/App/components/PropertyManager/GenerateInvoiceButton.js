import React, {useState} from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import GenerateInvoiceModal from './GenerateInvoiceModal'

const CustomEditButton = styled.button`
position: absolute;
width: 150px;
left: 800px;
top: -10px;
height: 40px;
background: #9595C9;
color: #fff;
border-radius: 20px;
border: none;
`

const GenerateInvoiceButton = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <CustomEditButton onClick={handleShow}>Generate Invoice</CustomEditButton>
      <GenerateInvoiceModal
        show={show}
        onHide={handleClose}
      />
    </>
  )
}

export default GenerateInvoiceButton
