import React, { Component } from 'react'
import {Button , Modal, Container, Form, Col, Row, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import './AddLandlordModal.css'

class GenerateInvoiceModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      year: '',
      property: '',
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
    // ... submit to API or something
  };

  render() {
    const { year, property} = this.state;
    return (
      <div>
        <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" >
        <Modal.Header style={{position: 'center'}}>GENERATE INVOICE</Modal.Header>
          <Modal.Body>
              <Container className="ModalContent">
                  <Row>
                      <Col>
                          <span style={{position: 'center'}}>Alfred Odhiambo</span><br />
                          <span style={{position: 'center'}}>Ramra Apartments</span>
                          <Form onSubmit={this.handleSubmit}>

                            <FormControl fullWidth>
                            <InputLabel>Year</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Amount"
                                value={year}
                                onChange={this.onChange}
                              >
                                <MenuItem>Ten</MenuItem>
                                <MenuItem>Twenty</MenuItem>
                                <MenuItem>Thirty</MenuItem>
                              </Select>
                            </FormControl>

                            <FormControl fullWidth>
                            <InputLabel>Property</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Amount"
                                value={property}
                                onChange={this.onChange}
                              >
                                <MenuItem>Ten</MenuItem>
                                <MenuItem>Twenty</MenuItem>
                                <MenuItem>Thirty</MenuItem>
                              </Select>
                            </FormControl>
                          </Form>
                      </Col>
                  </Row>
              </Container>
              </Modal.Body>
              <Modal.Footer className="footer">
                  <Col md={6} sm>
                    <Button className="btnCancel" sm>Cancel</Button>
                  </Col>
                  <Col md={6} sm>
                    <Button className="btnAddProperty" sm><Link style={{color: '#fff'}} to='/propertymanager/report/invoice'>Generate Report</Link></Button>
                  </Col>
              </Modal.Footer>
          </Modal>
      </div>
    )
  }
}

export default GenerateInvoiceModal
