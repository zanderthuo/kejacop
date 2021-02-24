import React, { Component } from 'react'
import {Button , Modal, Container, Form, Col, Row, Card, ProgressBar} from 'react-bootstrap'

import { TableHead } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

class EvictionHistory extends Component {
  render() {
    return (
      <div>
      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" >
        <Modal.Header>
          <span style={{color:'#000000'}}>Eviction History Overview</span>
        </Modal.Header>
        <Modal.Body>
            <Container className="ModalContent">
                    <Row>
                      <Col>
                        <ul style={{listStyle: 'none'}}>
                          <li>
                            <span style={{color:'#000000'}}>Applicant Information Submitted</span>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <li style={{listStyle: 'none'}}>
                          <span>Full Name :  <b>Alex Thuo</b></span>
                        </li>
                      </Col>
                      <Col>
                        <li style={{listStyle: 'none'}}>
                          <span>Requested by :  <b>Dan John</b></span>
                        </li>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>
                        <li style={{listStyle: 'none'}}>
                          <span>ID NO :  <b>24567890</b></span>
                        </li>
                      </Col>
                    </Row>
                    <br />
                      <Row>
                        <Col>
                          <li style={{listStyle: 'none'}}>
                            <span>Address :  <b>5th Avenue</b></span>
                          </li>
                        </Col>
                        <Col>
                          <li style={{listStyle: 'none'}}>
                            <span>Date Requested :  <b>23rd May 2020</b></span>
                          </li>
                        </Col>
                      </Row>
                <hr />
                <Row>
                  <Col>
                      <div style={{background:"#E0E0E0", height:"50px", textAlign:"center"}}>
                        <span>Report Summary</span>
                      </div>
                    <Container>
                      <Row>
                        <Col>
                          <span>No of times Evicted</span>
                        </Col>
                        <Col>
                          <span className="evictedCount">1</span>
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col>
                          <h6>First Instance</h6>
                          <br />
                          <span><b>Reason For Eviction</b></span>
                          <p>You were evicted on 5th Jan, 2020 due to rent delay for a period of 3 months </p>
                        </Col>
                        <Col></Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
            </Container>
            </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default EvictionHistory
