import React, { Component } from 'react'
import {Button , Modal, Container, Form, Col, Row, Card, ProgressBar} from 'react-bootstrap'
// import LandlordDataService from '../../../services/LandlordServices';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { LinearProgress } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';


class CreditReportOverviewModal extends Component {
  render() {
    const percentage = 66;
    return (
      <div>
        <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" >
          <Modal.Header>
            <span style={{color:'#000000'}}>Credit Report Overview</span>
          </Modal.Header>
          <Modal.Body>
              <Container className="ModalContent">
                  <Row>
                      <Col xs={6} md={{span: 3, offset: 4 }}>
                          <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                              pathColor:'#00B300',
                              marginTop: 80,
                            })}
                            />
                          <br />
                          <br />
                      </Col>
                      <Col md={{ span: 8, offset: 2 }}>
                        <span>300</span><ProgressBar variant="success" now={60} /><span>800</span>
                      </Col>
                      <br />
                      <br />
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
                            <TableRow>
                              <TableCell>#</TableCell>
                              <TableCell align="right">Status</TableCell>
                              <TableCell align="right">No of times</TableCell>
                              <TableCell align="right">Credit score</TableCell>
                              <TableCell align="right">Percentage</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>Recent Delay</TableCell>
                              <TableCell><i className="fa fa-circle text-c-red f-10 m-r-15" /></TableCell>
                              <TableCell>1</TableCell>
                              <TableCell>350</TableCell>
                              <TableCell>10%</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Rent Default</TableCell>
                              <TableCell><i className="fa fa-circle text-c-green f-10 m-r-15" /></TableCell>
                              <TableCell>0</TableCell>
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

export default CreditReportOverviewModal
