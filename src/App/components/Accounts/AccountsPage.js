import React, { useState } from 'react'
import { Row, Col, Tabs, Tab, Nav } from 'react-bootstrap';
import AccountsLedger from './AccountsLedger'
import AccountsBills from './AccountsBills'
import AddBillModal from './AddBillModal'
import styled from 'styled-components'

import './AccountsPage.css'

const CustomButton = styled.button`
  position: absolute;
  width: 150px;
  left: 800px;
  top: -50px;
  height: 40px;
  background: #9595C9;
  color: #fff;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  outline: none;
`

const AccountsPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Row>
        <Col>
          <CustomButton onClick={handleShow}>Add Bill</CustomButton>
          <Tabs variant="pills" defaultActiveKey="ledger" className="mb-3">
              <Tab eventKey="ledger" title="Ledger">
                <AccountsLedger />
              </Tab>
              <Tab eventKey="bills" title="Bills">
                  <AccountsBills />
              </Tab>
          </Tabs>
          <AddBillModal
            show={show}
            onHide={handleClose}
            />
        </Col>
      </Row>
    </div>
  )
}

export default AccountsPage
