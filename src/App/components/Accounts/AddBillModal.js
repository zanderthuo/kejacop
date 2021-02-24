import React, { useState } from 'react'
import {Button , Modal, Container, Form, Col, Row, Card} from 'react-bootstrap'
import { IconButton } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import './AddBillModal.css'


class AddBillModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      bill: '',
      property: '',
      type: '',
      amount: ''
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
    // ... submit to API
  };

  render(){
    const { firstName, lastName, bill, property, type, amount } = this.state;
    return (
        <div>
          <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
              <h4 className="AddBillHeading">ADD BILL</h4>
              <hr />
            </Modal.Header>
          <Modal.Body>
              <Container className="ModalContent">
                  <Row>
                      <Col>
                          <Form onSubmit={this.handleSubmit}>

                            <div className="input-field">
                                <TextField type="text" id="propertyName" fullWidth label="First Name" value={firstName} onChange={this.onChange} />
                            </div>
                            <div className="input-field">
                                <TextField type="text" id="propertyLocation" fullWidth label="Last Name" value={lastName} onChange={this.onChange} />
                            </div>

                            <FormControl fullWidth>
                            <InputLabel>Bill</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Bill"
                                value={bill}
                                onChange={this.onChange}
                              >
                                <MenuItem >Ten</MenuItem>
                                <MenuItem>Twenty</MenuItem>
                                <MenuItem>Thirty</MenuItem>
                              </Select>
                            </FormControl>

                            <FormControl fullWidth>
                            <InputLabel>Type</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Type"
                                value={type}
                                onChange={this.onChange}
                              >
                                <MenuItem >Ten</MenuItem>
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

                            <div className="input-field">
                                <TextField type="text" id="amount" fullWidth label="Amount" value={amount} onChange={this.onChange} />
                            </div>

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
                    <Button className="btnAddProperty" sm>Add Bill</Button>
                  </Col>
              </Modal.Footer>
          </Modal>
      </div>
    )
  }
}

export default AddBillModal
