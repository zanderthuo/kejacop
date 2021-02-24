import React, { useState } from 'react';
import { Button , Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

import CreditReportOverviewModal from './CreditReportOverviewModal'
import EvictionHistoryModal from './Modals/EvictionHistoryModal'
import BackgroundReportModal from './Modals/BackgroundReportModal'

import avatar1 from '../../../assets/images/user/avatar-1.jpg'
import styled from 'styled-components';

import './ScreeningDrawer.css'

const Div = styled.div`
display: block;
left: 220px;
position: inherit;
`

const CustomButtonViewReport = styled.button`
background: #446E7B;
border-radius: 20px;
color: #fff;
width: 130px;
height: 35px;
border: none;
`

const ScreeningPage = () => {
  const [show, setShow] = useState(false);
  const [showEvictionReport, setShowEvictionReport] = useState(false);
  const [showBackgroundReport, setShowBackgroundReport] = useState(false);
  const handleCreditReportClose = () => setShow(false);
  const handleEvictionReportClose = () => setShowEvictionReport(false);
  const handleBackgroundReportClose = () => setShowBackgroundReport(false);
  const handleShowCreditReport = () => setShow(true);
  const handleShowEvictionReport = () => setShowEvictionReport(true);
  const handleShowBackgroundReport = () => setShowBackgroundReport(true);

  return (
    <>
    <Link to="/screening" style={{color: 'black'}}><i class="fa fa-arrow-left">Back</i></Link>
      <Row className="ScreeningDrawer" style={{display: 'no-flex', justifyContent: 'center'}}>
          <Col sm>
            <Card>
              <Card.Header>
                <Div className="userScreening">
                    <img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/> <br />
                      <span>Frank Simpsons</span><br />
                      <span>test@gmail.com</span>
                </Div>
              </Card.Header>
              <Card.Body>
                <div className="row align-items-center justify-content-center m-b-20">
                      <Col md-6>
                        <h4>Credit Report</h4>
                      </Col>
                    <Col md-6>
                      <CustomButtonViewReport onClick={handleShowCreditReport}>View</CustomButtonViewReport>
                    </Col>
                </div>
                <hr />
                  <div className="row align-items-center justify-content-center m-b-20">
                      <Col md-6>
                          <h4>Eviction History</h4>
                      </Col>
                      <Col md-6>
                        <CustomButtonViewReport onClick={handleShowEvictionReport}>View</CustomButtonViewReport>
                      </Col>
                  </div>
                  <hr />
                    <div className="row align-items-center justify-content-center m-b-20">
                        <Col>
                            <h4>Background Report</h4>
                        </Col>
                        <Col sm>
                          <CustomButtonViewReport onClick={handleShowBackgroundReport}>View</CustomButtonViewReport>
                        </Col>
                    </div>
                    <hr />
              </Card.Body>
            </Card>
          </Col>
      </Row>
      <CreditReportOverviewModal
        show={show}
        onHide={handleCreditReportClose}
        />
      <BackgroundReportModal
        show={showBackgroundReport}
        onHide={handleBackgroundReportClose}
        />
      <EvictionHistoryModal
        show={showEvictionReport}
        onHide={handleEvictionReportClose}
        />
    </>
  )
}

export default ScreeningPage
