import React from 'react'
import {Modal,Row,Col,Container}from 'react-bootstrap'
import Avatar from '@material-ui/core/Avatar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './TenantsBillingModal.css'
import { TableHead } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';


export default class BillingModal extends React.Component{
  render(){
    const percentage = 72;
    return(
      <Modal className="ModalContent" {...this.props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header className="ModalHeader" closeButton>
          <div>
            <Avatar style={{height:'60px' , width: '60px' }} src="/broken-image.jpg" />
            <h5>Osilo Okindo</h5>
            <span className="Residence">Kilimani flats | J7 | Kiambu Road </span>
          </div>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <h6>CREDIT REPORT GRAPH</h6>
              <span>Based on timely bills payments</span>
            </Col>
            <Col xs={6} md={4}>
              <CircularProgressbar 
                value={percentage}            
                text={`${percentage}%`}
                styles={buildStyles({
                  pathColor:'#00B300',
                  marginTop: 80,
                })}
              />
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={12}>
              <TableContainer>
                <Table responsive>
                  <TableHead>
                    <h6>Recent Transactions</h6>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Rent Bills</TableCell>
                      <TableCell>10-02-2020</TableCell>
                      <TableCell>Ksh.22,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Water Bills</TableCell>
                      <TableCell>15-02-2020</TableCell>
                      <TableCell>Ksh.2,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Electricity Bills</TableCell>
                      <TableCell>01-02-2020</TableCell>
                      <TableCell>Ksh.4,500</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
    )
  }
}
