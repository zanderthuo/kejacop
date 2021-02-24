import React, { Component } from 'react'
import axios from 'axios'
import {Form, Col, Row} from 'react-bootstrap'
import DatePicker from "react-datepicker";

import styled from 'styled-components'

const CustomSubmitButton = styled.button`
    position: absolute;
    background: #446E7B;
    border-radius: 20px;
    right: 200px;
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
    left: 180px;
`

class AddLeaseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tenant: [],
      property: [],
      unit: [],
      leaseDate: new Date(),
      leaseEndDate: new Date(),
      leaseDuration: '',
      rentDepositAmount: '',
      paymentPeriod: '',
      billCurrentMonth: [],
      file1: '',
      file2: '',
      file3: '',
      imgs: [],
      date: '',
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImgChange = this.handleImgChange.bind(this);
  }

  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleImgChange(e, i){
    e.preventDefault();

    let reader = new FileReader();
    let file1 = e.target.files[0];
    let file2 = e.target.files[0];
    let file3 = e.target.files[0];
    const { imgs } = this.state;

    reader.onloadend = () => {
        // imgs[i].img = reader.result;
        this.setState({
            file1: file1,
            file2: file2,
            file3: file3,
            imgs,
        });
    }
    reader.readAsDataURL(file1,file2,file3)
  }

  handleDateChange = (event) => {
    this.setState({
      leaseDate: event.target.value,
      leaseEndDate: event.target.value
    })
  }

  // handleImgChange(e, i) {
  //     e.preventDefault();
  //
  //     let reader = new FileReader();
  //     let file = e.target.files[0];
  //     // const { dummyimgs } = this.state;
  //
  //     reader.onloadend = () => {
  //         dummyimgs[i].img = reader.result;
  //         this.setState({
  //             file: file,
  //             // dummyimgs,
  //         });
  //     }
  //     reader.readAsDataURL(file)
  //   }

  handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      tenant: this.state.tenant,
      property: this.state.property,
      unit: this.state.unit,
      leaseDate:this.state.leaseDate,
      leaseEndDate: this.state.leaseEndDate,
      leaseDuration: this.state.leaseDuration,
      rentDepositAmount: this.state.rentDepositAmount,
      paymentPeriod: this.state.paymentPeriod,
      billCurrentMonth: this.state.billCurrentMonth,
      file1: this.state.file1,
      file2: this.state.file2,
      file3: this.state.file3,
    };

    console.log(data)

    // axios.post('https://reqres.in/api/users', {data})
    //   .then(res => {
    //     console.log(data);
    //   })
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
          <Col>
            <span style={{color: 'black'}} className="TenantsDetails">Lease Details</span>
            <br /><br />
            <Form style={{color: 'black'}}>
              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Tenant
                </Form.Label>
                <Col sm={10}>
                <Form.Control
                  as="select"
                  option={this.ownerType}
                  name="tenant"
                  className="my-1 mr-sm-2"
                  id="tenant"
                  onChange={this.handleOnChange}
                  custom
                >
                  <option value="0">Choose...</option>
                  <option value="1">James Omollo</option>
                  <option value="2">SUdi Kyalo</option>
                  <option value="3">Patrick Patrick</option>
                </Form.Control>
              </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Property
                </Form.Label>
                <Col sm={10}>
                <Form.Control
                  as="select"
                  option={this.property}
                  name="property"
                  className="my-1 mr-sm-2"
                  id="property"
                  onChange={this.handleOnChange}
                  custom
                >
                  <option value="0">Choose...</option>
                  <option value="1">Jama Apartments</option>
                  <option value="2">Eden Villa</option>
                  <option value="3">Sunview Apartments</option>
                </Form.Control>
              </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Unit
                </Form.Label>
                <Col sm={10}>
                <Form.Control
                  as="select"
                  option={this.unit}
                  name="unit"
                  className="my-1 mr-sm-2"
                  id="unit"
                  onChange={this.handleOnChange}
                  custom
                >
                  <option value="0">Choose...</option>
                  <option value="1">K4</option>
                  <option value="2">J7</option>
                  <option value="3">L9</option>
                </Form.Control>
              </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="leaseDate">
                <Form.Label column sm={2}>
                  Lease Date
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="date" name="leaseDate" selected={this.state.leaseDate} onChange={this.handleDateChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="leaseEndDate">
                <Form.Label column sm={2}>
                  Lease End Date
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="date" name="leaseEndDate" selected={this.state.leaseEndDate} onChange={this.handleDateChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="idNO">
                <Form.Label column sm={2}>
                  Lease Duration
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.leaseDuration} name="leaseDuration" type="text" placeholder="Lease Duration" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="phoneNumber">
                <Form.Label column sm={2}>
                  Rent Deposit Amount
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.rentDepositAmount} name="rentDepositAmount" type="text" placeholder="Rent Deposit Amount" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="emailAddress">
                <Form.Label column sm={2}>
                  Payment Period
                </Form.Label>
                <Col sm={10}>
                  <Form.Control value={this.paymentPeriod} name="paymentPeriod" type="text" placeholder="Payment Period" onChange={this.handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Bill Current Month
                </Form.Label>
                <Col sm={10}>
                <Form.Control
                  as="select"
                  option={this.billCurrentMonth}
                  name="billCurrentMonth"
                  className="my-1 mr-sm-2"
                  id="billCurrentMonth"
                  onChange={this.handleOnChange}
                  custom
                >
                  <option value="0">Choose...</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Control>
              </Col>
              </Form.Group>

              <Form.Group>
                <Form.File
                  className="position-relative"
                  required
                  value={this.file1}
                  name="tenantPic"
                  name="Tenant Photo"
                  label="Tenant Photo"
                  id="tenantPic"
                  onChange={this.handleImgChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.File
                  className="position-relative"
                  required
                  value={this.file2}
                  name="idPicFront"
                  name="Tenant ID(Front)"
                  label="Tenant ID(Front)"
                  id="idPicFront"
                  onChange={this.handleImgChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.File
                  className="position-relative"
                  required
                  value={this.file3}
                  name="idPicBack"
                  name="Tenant ID(Back)"
                  label="Tenant ID(Back)"
                  id="idPicBack"
                  onChange={this.handleImgChange}
                />
              </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Col sm>
              <CustomSubmitButton className="fa fa-plus" type="submit" onClick={this.handleSubmit}>  Save Tenant</CustomSubmitButton>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm>
              <CustomCancelButton className="fa fa-times">  Cancel</CustomCancelButton>
            </Col>
          </Form.Group>
        </Form>
        </Col>
      </div>
    )
  }
}

export default AddLeaseForm
