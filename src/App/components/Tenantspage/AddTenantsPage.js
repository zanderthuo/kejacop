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
  Select,
  Card,
} from "react-bootstrap";

import styled from "styled-components";

import "./EvictionNoticeModal.css";

// import * as AddTenants from "./AddTenants";
import Individual from "./AddTenants/Individual";
import Cooperate from "./AddTenants/Cooperate";
import Partnership from "./AddTenants/Partnership";

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

class AddTenantsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFormType: "",
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
      ownerType: this.state.ownerType,
    };

    // console.log(data);

    // axios.post('https://reqres.in/api/users', {data})
    //   .then(res => {
    //     console.log(data);
    //   })
    //   .catch(err => console.log(err));
  };

  renderFormSelector() {
    return (
      <div>
        <select
          name="ownerType"
          className="my-1 mr-sm-2"
          value={this.selectedFormType}
          id="selectedFormType"
          onChange={(e) => {
            this.setState({ selectedFormType: e.target.value });
          }}
        >
          <option value="1" selected>Choose one...</option>
          <option value="2">Individual</option>
          <option value="3">Corporation</option>
          <option value="4">Partnership</option>
        </select>
      </div>
    );
  }

  render() {
    // console.log(this.state.selectedFormType);
    // const { ownerType, firstName, lastName, idNO, phoneNumber, emailAddress, dateOfBirth, gender, nextOfKin, nextOfKinContact, relation, tenantPic, idPicFront, idPicBack } = this.state;
    return (
      <div>
        <Link to="/tenantspage" style={{ color: "black" }}>
          <i class="fa fa-arrow-left">Back</i>
        </Link>
        <Col>
          <span style={{ color: "black" }} className="TenantsDetails">
            Tenants Details
          </span>
          <br />
          <br />
          <Form style={{ color: "black" }}>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Owner Type
              </Form.Label>
              <Col sm={10}>{this.renderFormSelector()}</Col>
              <Col sm>{this.renderSelectedForm(this.state.selectedFormType)}</Col>
            </Form.Group>
          </Form>
        </Col>
      </div>
    );
  }
  renderSelectedForm(selectedFormType) {
    if (this.state.selectedFormType === "2") {
      return <Individual />;
    } else if (this.state.selectedFormType === "3") {
      return <Cooperate/>;
    } else if (this.state.selectedFormType === "4"){
      return <Partnership />;
    }
    // const Form = AddTenants[selectedFormType];
    // console.log(this.state.selectedFormType);
  }
}

export default AddTenantsPage;
