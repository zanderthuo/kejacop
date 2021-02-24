import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Button , Modal, Container, Form, Col, Row, Card} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import styled from 'styled-components'

const CustomSubmitButton = styled.button`
    position: absolute;
    background: #446E7B;
    border-radius: 20px;
    right: 50px;
    border: none;
    color: #fff;
    width: 120px;
    height: 35px;
    top: 18px;
`
const CustomCancelButton = styled.button`
    position: absolute;
    background: #EF3C4E;
    border-radius: 20px;
    border: none;
    color: #fff;
    width: 120px;
    height: 35px;
`

// To continue handling form submission

class AddWorkOrderForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      property: '',
      unit: '',
      date_started: '',
      handyman_name:'',
      notification: '',
      type_of_work: '',
      fee_payable: '',
      payment_status: '',
      description_of_work: '',
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }



  handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      property: this.state.property,
      unit: this.state.unit,
      date_started: this.state.date_started,
      handyman_name: this.state.handyman_name,
      notification: this.state.notification,
      type_of_work: this.state.type_of_work,
      fee_payable: this.state.fee_payable,
      payment_status: this.state.payment_status,
      description_of_work: this.state.description_of_work,
    };

    console.log(data)

    // axios.post('https://reqres.in/api/users', {data})
    //   .then(res => {
    //     console.log(data);
    //   })
    //   .catch(err => console.log(err));
  };

  render(){
    // const { property, unit, date_started, handyman_name, notification, type_of_work, fee_payable, payment_status, description_of_work } = this.state;
    return (
        <div>
          <Link to="/maintenance" style={{color: 'black'}}><i class="fa fa-arrow-left">Back</i></Link>
          <Col>
            <span style={{color: 'black'}} className="TenantsDetails">Add Work Order</span>
            <br /><br />
            <Form style={{color: 'black'}}>
              <Form.Group as={Row} controlId="firstName">
                <Form.Label column sm={2}>
                  Property
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.property} name="property" type="text" placeholder="Jama Apartments" onChange={this.handleOnChange} readOnly />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="lastName">
                <Form.Label column sm={2}>
                  Unit
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.unit} name="unit" type="text" placeholder="Unit" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="lastName">
                <Form.Label column sm={2}>
                  Date Started
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.date_started} name="date_started" type="text" placeholder="DD/MM/YYYY" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Handyman's Name
                </Form.Label>
                <Col sm={10}>
                <Form.Control
                  as="select"
                  value={this.handyman_name}
                  name="handyman_name"
                  className="my-1 mr-sm-2"
                  id="ownerType"
                  onChange={this.handleOnChange}
                  custom
                >
                  <option value="0">Choose...</option>
                  <option value="1">Kinuthia</option>
                  <option value="2">KImani</option>
                  <option value="3">Njagi</option>
                </Form.Control>
              </Col>
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Label column sm={2}>
                  Notification Via
                </Form.Label>
                <Col sm={10}>
                  <Form.Check type="radio" label="SMS" />
                  <Form.Check type="radio" label="Email" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="phoneNumber">
                <Form.Label column sm={2}>
                  Type of Work
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.type_of_work} name="type_of_work" type="text" placeholder="Type of Work" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="emailAddress">
                <Form.Label column sm={2}>
                  Fee Payable
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.fee_payable} name="fee_payable" type="text" placeholder="Fee Payable" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="dateOfBirth">
                <Form.Label column sm={2}>
                  Payment Status
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.payment_status} name="payment_status" type="text" placeholder="Payment Status" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="nextOfKin">
                <Form.Label column sm={2}>
                  Description of Work
                </Form.Label>
                <Col sm={10}>
                  <Form.Control as="textarea" value={this.description_of_work} name="description_of_work" type="text" placeholder="Description of Work..." onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Col sm>
              <CustomSubmitButton className="fa fa-plus" type="submit" onClick={this.handleSubmit}>  Submit</CustomSubmitButton>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm>
              <CustomCancelButton className="fa fa-times" type="submit">  Cancel</CustomCancelButton>
            </Col>
          </Form.Group>
        </Form>
        </Col>
      </div>
    )
  }
}

export default AddWorkOrderForm
