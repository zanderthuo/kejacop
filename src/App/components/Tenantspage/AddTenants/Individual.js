import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Modal,
  Container,
  Form,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import styled from "styled-components";

import "../EvictionNoticeModal.css";

const CustomSubmitButton = styled.button`
  position: absolute;
  background: #446e7b;
  border-radius: 20px;
  right: 50px;
  border: none;
  color: #fff;
  width: 120px;
  height: 35px;
  top: 18px;
`;
const CustomCancelButton = styled.button`
  position: absolute;
  background: #ef3c4e;
  border-radius: 20px;
  border: none;
  color: #fff;
  width: 120px;
  height: 35px;
`;

// To continue handling form submission

class Individual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      idNO: "",
      phoneNumber: "",
      emailAddress: "",
      dateOfBirth: "",
      gender: "",
      nextOfKin: "",
      nextOfKinContact: "",
      relation: "",
      tenantPic: [],
      idPicFront: [],
      idPicBack: [],
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      idNO: this.state.idNO,
      phoneNumber: this.state.phoneNumber,
      emailAddress: this.state.emailAddress,
      dateOfBirth: this.state.dateOfBirth,
      gender: this.state.gender,
      nextOfKin: this.state.nextOfKin,
      nextOfKinContact: this.state.nextOfKinContact,
      relation: this.state.relation,
      tenantPic: this.state.tenantPic,
      idPicFront: this.state.idPicFront,
      idPicBack: this.state.idPicBack,
    };

    console.log(data);

    // axios.post('https://reqres.in/api/users', {data})
    //   .then(res => {
    //     console.log(data);
    //   })
    //   .catch(err => console.log(err));
  };

  render() {
    // const { ownerType, firstName, lastName, idNO, phoneNumber, emailAddress, dateOfBirth, gender, nextOfKin, nextOfKinContact, relation, tenantPic, idPicFront, idPicBack } = this.state;
    return (
      <div>
        <Col>
          <Form style={{ color: "black" }}>
            <Form.Group as={Row} controlId="firstName">
                <Form.Label column sm={2}>
                  First Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.firstName} name="firstName" type="text" placeholder="First Name" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="lastName">
                <Form.Label column sm={2}>
                  Last Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.lastName} name="lastName" type="text" placeholder="Last Name" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="idNO">
                <Form.Label column sm={2}>
                  ID Number
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.idNO} name="idNO" type="text" placeholder="ID Number" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="phoneNumber">
                <Form.Label column sm={2}>
                  Phone Number
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.phoneNumber} name="phoneNumber" type="number" placeholder="Phone Number" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="emailAddress">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.emailAddress} name="emailAddress" type="email" placeholder="Email" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="dateOfBirth">
                <Form.Label column sm={2}>
                  Date Of Birth
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.dateOfBirth} name="dateOfBirth" type="text" placeholder="DD/MM/YYYY" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Gender
                </Form.Label>
                <Col sm={10}>
                <Form.Control
                  as="select"
                  value={this.gender}
                  name="gender"
                  className="my-1 mr-sm-2"
                  onChange={this.handleOnChange}
                  id="gender"
                  custom
                >
                  <option value="0">Choose...</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </Form.Control>
              </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="nextOfKin">
                <Form.Label column sm={2}>
                  Next Of Kin
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.nextOfKin} name="nextOfKin" type="text" placeholder="Next Of Kin" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="nextOfKinContact">
                <Form.Label column sm={2}>
                  Next Of Kin Contact
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.nextOfKinContact} name="nextOfKinContact" type="text" placeholder="Next Of Kin Contact" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} >
                <Form.Label column sm={2}>
                  Relation
                </Form.Label>
                <Col sm={10}>
                <Form.Control
                  as="select"
                  value={this.relation}
                  name="relation"
                  className="my-1 mr-sm-2"
                  id="relation"
                  onChange={this.handleOnChange}
                  custom
                >
                  <option value="0">Choose...</option>
                  <option value="1">Mother</option>
                  <option value="2">Father</option>
                  <option value="3">Wife</option>
                  <option value="4">Husband</option>
                  <option value="5">Brother</option>
                  <option value="6">Sister</option>
                </Form.Control>
              </Col>
              </Form.Group>

              <Form.Group>
                <Form.File
                  className="position-relative"
                  required
                  value={this.tenantPic}
                  name="tenantPic"
                  name="Tenant Photo"
                  label="Tenant Photo"
                  id="tenantPic"
                  onChange={this.handleOnChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.File
                  className="position-relative"
                  required
                  value={this.idPicFront}
                  name="idPicFront"
                  name="Tenant ID(Front)"
                  label="Tenant ID(Front)"
                  id="idPicFront"
                  onChange={this.handleOnChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.File
                  className="position-relative"
                  required
                  value={this.idPicBack}
                  name="idPicBack"
                  name="Tenant ID(Back)"
                  label="Tenant ID(Back)"
                  id="idPicBack"
                  onChange={this.handleOnChange}
                />
              </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col sm>
                <CustomSubmitButton
                  className="fa fa-plus"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  {" "}
                  Submit
                </CustomSubmitButton>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm>
                <CustomCancelButton className="fa fa-times" type="submit">
                  {" "}
                  Cancel
                </CustomCancelButton>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </div>
    );
  }
}

export default Individual;
