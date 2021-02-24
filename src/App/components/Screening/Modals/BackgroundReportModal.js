import React, { Component } from 'react'
import {Button , Modal, Container, Form, Col, Row, Card, ProgressBar} from 'react-bootstrap'
// import LandlordDataService from '../../../services/LandlordServices';
import 'react-circular-progressbar/dist/styles.css';

import { LinearProgress } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';


class BackgroundReportModal extends Component {
  render() {
    return (
      <div>
        <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header>
            <span style={{color:'#000000'}}>Background Report Overview</span>
          </Modal.Header>
          <Modal.Body>
              <Container className="ModalContent">
                      <Row>
                        <Col>
                          <ul style={{listStyle: 'none'}}>
                            <li>
                              <span>Created on :  <b>Tuesday, 26th July 2020</b></span>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <li style={{listStyle: 'none'}}>
                            <span>First Name :  <b>Alex</b></span>
                          </li>
                        </Col>
                        <Col>
                          <li style={{listStyle: 'none'}}>
                            <span>Last Name :  <b>Zander</b></span>
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
                        <Col>
                          <li style={{listStyle: 'none'}}>
                            <span>Phone No :  <b>+254789780000</b></span>
                          </li>
                        </Col>
                        <Col>
                          <li style={{listStyle: 'none'}}>
                            <span>Email :  <b>test@gmail.com</b></span>
                          </li>
                        </Col>
                      </Row>
                  <hr />
                  <Row>
                    <Col>
                        <div style={{background:"#E0E0E0", height:"50px", textAlign:"center"}}>
                          <span>Report Summary</span>
                        </div>
                      <TableContainer>
                        <Table responsive>
                          <TableHead>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>Cleanliness</TableCell>
                              <TableCell><i className="fa fa-circle text-c-red f-10 m-r-15" /></TableCell>
                              <TableCell>350</TableCell>
                              <TableCell>10%</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Noise</TableCell>
                              <TableCell><i className="fa fa-circle text-c-green f-10 m-r-15" /></TableCell>
                              <TableCell>700</TableCell>
                              <TableCell>80%</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Col>
                  </Row>
              </Container>
              </Modal.Body>
          </Modal>
      </div>
    )
  }
}

export default BackgroundReportModal
