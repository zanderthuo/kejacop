import React, { useState } from 'react'
import {Button , Modal, Container, Form, Col, Row, Card} from 'react-bootstrap'
import { IconButton } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import './InviteApplicantModal.css'


class InviteApplicantModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      property: '',
      roomNo: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.naem);
    // ... submit to API or something
  };

  render(){
    const { firstName, lastName, emailAddress, property, roomNo } = this.state;
    return (
        <div>
          <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" >
          <Modal.Body>
              <Container className="ModalContent">
                  <Row>
                      <Col>
                          <Form onSubmit={this.handleSubmit}>

                            <div className="input-field">
                                <TextField type="text" name="firstName" id="propertyName" fullWidth label="First Name" value={firstName} onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <TextField type="text" name="lastName" id="propertyLocation" fullWidth label="Last Name" value={lastName} onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <TextField type="email" name="emailAddress" id="noOfUnits" fullWidth label="Email Address" value={emailAddress} onChange={this.handleChange} />
                            </div>
                            <FormControl fullWidth>
                            <InputLabel>Property</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="property"
                                label="Landlords"
                                value={property}
                                onChange={this.handleChange}
                              >
                                <MenuItem >Ten</MenuItem>
                                <MenuItem>Twenty</MenuItem>
                                <MenuItem>Thirty</MenuItem>
                              </Select>
                            </FormControl>
                            <FormControl fullWidth>
                            <InputLabel>Room No</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Landlords"
                                name="roomNo"
                                value={roomNo}
                                onChange={this.handleChange}
                              >
                                <MenuItem>K89</MenuItem>
                                <MenuItem>L54</MenuItem>
                                <MenuItem>J98</MenuItem>
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
                    <Button className="btnAddProperty" sm>Send Invitation</Button>
                  </Col>
              </Modal.Footer>
          </Modal>
      </div>
    )
  }
}

export default InviteApplicantModal
