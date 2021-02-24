import React, {useState} from 'react'

import LandlordDatatable from './LandlordDatatable'
import CaretakerDatatable from './CaretakerDatatable'
import HandymanDatatable from './HandymanDatatable'

import {Tab, Tabs} from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components'

import AddLandlordModal from './AddLandlordModal'
import AddHandymanModal from './AddHandymanModal'
import AddCaretakerModal from './AddCaretakerModal'

import './PropertyManagerPage.css'

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

`

const PropertyManagerPage = () => {
  const [showLandlord, setShowLandlord] = useState(false);
  const [showCaretaker, setShowCaretaker] = useState(false);
  const [showHandyman, setShowHandyman] = useState(false);
  const handleCloseLandlord = () => setShowLandlord(false);
  const handleShowLandlord = () => setShowLandlord(true);
  const handleShowCaretaker = () => setShowCaretaker(true);
  const handleCloseCaretaker = () => setShowCaretaker(false);
  const handleShowHandyman = () => setShowHandyman(true);
  const handleCloseHandyman = () => setShowHandyman(false);

  return (
    <>
    <Row>
      <Col>
          <Tabs variant="pills" defaultActiveKey="landlord" className="mb-3">
              <Tab eventKey="landlord" title="Landlords">
                <CustomButton onClick={handleShowLandlord} className="AddLandlordBtn">Add Landlords</CustomButton>
                <LandlordDatatable />
              </Tab>
              <Tab eventKey="caretaker" title="Caretakers">
                <CustomButton onClick={handleShowCaretaker} className="AddCaretakerBtn">Add Caretakers</CustomButton>
                <CaretakerDatatable />
              </Tab>
              <Tab eventKey="handyman" title="Handymen">
                <CustomButton onClick={handleShowHandyman} className="AddHandymanBtn">Add Handymen</CustomButton>
                <HandymanDatatable />
              </Tab>
          </Tabs>
        <AddLandlordModal
          show={showLandlord}
          onHide={handleCloseLandlord}
          />
        <AddCaretakerModal
          show={showCaretaker}
          onHide={handleCloseCaretaker}
          />
        <AddHandymanModal
          show={showHandyman}
          onHide={handleCloseHandyman}
          />
      </Col>
    </Row>
    </>
  );
}

export default PropertyManagerPage;
