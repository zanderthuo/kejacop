import React, { useState } from 'react';
import { Button , Row, Col, Card } from 'react-bootstrap';

import avatar1 from '../../../assets/images/user/avatar-1.jpg'
import styled from 'styled-components';

const CustomButtonDenied = styled.button`
position: absolute;
width: 100px;
height: 30px;
left: 90px;
background: #EF3C4E;
border-radius: 20px;
border: none;
color: #fff;
`
const CustomButtonShared = styled.button`
position: absolute;
width: 100px;
height: 30px;
left: 90px;
background: #219653;
border-radius: 20px;
border: none;
color: #fff;
`

const CustomButtonDecline = styled.button`
position: absolute;
width: 100px;
height: 30px;
background: #EF3C4E;
border-radius: 20px;
border: none;
color: #fff;
`

const CustomButtonAdmit = styled.button`
position: absolute;
width: 100px;
height: 30px;
left: 200px;
background: #446E7B;
border-radius: 20px;
border: none;
color: #fff;
`

const ViewReportDrawer = () => {

  return (
    <>
      <Row style={{display: 'no-flex', justifyContent: 'center'}}>
          <Col sm>
            <Card>
              <Card.Header>
                <div className="m-r-10 photo-table">
                    <img className="rounded-circle" style={{width: '40px', align: 'center'}} src={avatar1} alt="activity-user"/> <br />
                      <span>test@gmail.com</span><br />
                      <span>+254718878787</span>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="row align-items-center justify-content-center m-b-20">
                    <div className="col-6">
                        <h4>Credit Report</h4>
                        <span>submitted on March 2020</span>
                    </div>
                    <div className="col-6">
                        <CustomButtonShared>Shared</CustomButtonShared>
                    </div>
                </div>
                <hr />
                  <div className="row align-items-center justify-content-center m-b-20">
                      <div className="col-6">
                          <h4>Credit Report</h4>
                          <span>submitted on March 2020</span>
                      </div>
                      <div className="col-6">
                          <CustomButtonDenied>Denied</CustomButtonDenied>
                      </div>
                  </div>
                  <hr />
              </Card.Body>
              <Card.Footer>
                <CustomButtonDecline>Decline</CustomButtonDecline>
                <CustomButtonAdmit>Admit</CustomButtonAdmit>
              </Card.Footer>
            </Card>
          </Col>
      </Row>
    </>
  )
}

export default ViewReportDrawer
