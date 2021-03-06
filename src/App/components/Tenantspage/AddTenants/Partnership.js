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

class Partnership extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partnershipName: "",
      partnershipRegNo: "",
      phoneNumber: "",
      emailAddress: "",
      businessAddress: "",
      businessDomain: "",
      businessRegCert: [],
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
      partnershipName: this.state.partnershipName,
      partnershipRegNo: this.state.partnershipRegNo,
      phoneNumber: this.state.phoneNumber,
      emailAddress: this.state.emailAddress,
      businessAddress: this.state.businessAddress,
      businessDomain: this.state.businessDomain,
      businessRegCert: this.state.businessRegCert,
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
            <Form.Group as={Row} controlId="partnershipName">
              <Form.Label column sm={2}>
                Partnership Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={this.partnershipName}
                  name="partnershipName"
                  type="text"
                  placeholder="Partnership Name"
                  onChange={this.handleOnChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="partnershipRegNo">
              <Form.Label column sm={2}>
                Partnership Registration No.
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={this.partnershipRegNo}
                  name="partnershipRegNo"
                  type="text"
                  placeholder="Partnership Registration No"
                  onChange={this.handleOnChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="phoneNumber">
              <Form.Label column sm={2}>
                Phone Number
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={this.phoneNumber}
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  onChange={this.handleOnChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="emailAddress">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={this.emailAddress}
                  name="emailAddress"
                  type="email"
                  placeholder="Email"
                  onChange={this.handleOnChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="businessAddress">
              <Form.Label column sm={2}>
                Business Address
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={this.businessAddress}
                  name="businessAddress"
                  type="text"
                  placeholder="Business Address"
                  onChange={this.handleOnChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="businessDomain">
              <Form.Label column sm={2}>
                Business Domain/Occupation
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={this.businessDomain}
                  name="businessDomain"
                  type="text"
                  placeholder="Business Domain"
                  onChange={this.handleOnChange}
                />
              </Col>
            </Form.Group>

            <Form.Group>
              <Form.File
                className="position-relative"
                required
                value={this.businessRegCert}
                name="businessRegCert"
                label="Business Registration Certificate"
                id="businessRegCert"
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

export default Partnership;
