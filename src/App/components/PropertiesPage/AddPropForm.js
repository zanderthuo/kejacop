import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Form, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

import './AddPropertyForm.css';

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



class AddPropertyForm extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        currentProperty: {
          propertyName: '',
          locationCounty: '',
          location: '',
          propertyAddress:'',
          propertyType: '',
          commisionRate: '',
          details: '',
        },
        property:[],
      }

      this.handleOnChange = this.handleOnChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleOnChange = (e) => {
      e.preventDefault();
      this.setState({
        currentProperty:{
          [e.target.name] : e.target.value
      }});
    }



        handleSubmit = (e) => {
          e.preventDefault()

          const data = {
            propertyName: this.state.propertyName,
            locationCounty: this.state.locationCounty,
            location: this.state.location,
            propertyAddress:this.state.propertyAddress,
            propertyType: this.state.propertyType,
            commisionRate: this.state.commisionRate,
            details: this.state.details,
          };
          this.setState(
              console.log(data)
            );
            // console.log(res.data)

          // axios.post('https://reqres.in/api/users', {data})
          //   .then(res => {
          //     console.log(data);
          //   })
          //   .catch(err => console.log(err));
        };

   render(){
    return(
      <div>
        <Link to="/properties" style={{color: 'black'}}><i class="fa fa-arrow-left">Back</i></Link>
        <Col>
          <span style={{color: 'black'}} className="TenantsDetails">Property Details</span>
          <br /><br />
          <Form style={{color: 'black'}}>

            <Form.Group as={Row} controlId="propertyName">
              <Form.Label column sm={2}>
                Property Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" value={this.state.currentProperty.propertyName} placeholder="Property Name" name="propertyName" onChange={this.handleOnChange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="locationCountry">
              <Form.Label column sm={2}>
                Location County
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" value={this.state.currentProperty.locationCounty} placeholder="Location County" name="locationCounty" onChange={this.handleOnChange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="location">
              <Form.Label column sm={2}>
                Location
              </Form.Label>
              <Col sm={10}>
                <Form.Control value={this.state.currentProperty.location} type="text" placeholder="Location" name="location" onChange={this.handleOnChange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="propertyAddress">
              <Form.Label column sm={2}>
                Property Address
              </Form.Label>
              <Col sm={10}>
                <Form.Control value={this.state.currentProperty.propertyAddress} name="propertyAddress" type="text" placeholder="Property Address" onChange={this.handleOnChange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Property Type
              </Form.Label>
              <Col sm={10}>
              <Form.Control
                as="select"
                value={this.state.currentProperty.propertyType}
                className="my-1 mr-sm-2"
                name="propertyType"
                onChange={this.handleOnChange}
                id="gender"
                custom
              >
                <option value="0">Choose...</option>
                <option value="1">Individual</option>
                <option value="2">Corporation</option>
                <option value="3">Enterprise</option>
              </Form.Control>
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="commisionRate">
              <Form.Label column sm={2}>
                Commision Rate
              </Form.Label>
              <Col sm={10}>
                <Form.Control as="input" value={this.state.currentProperty.commisionRate} type="text" placeholder="Commision Rate" name="commisionRate" onChange={this.handleOnChange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="details">
              <Form.Label column sm={2}>
                Details
              </Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea" value={this.state.currentProperty.details} type="text" placeholder="Details" name="details" onChange={this.handleOnChange} />
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

export default AddPropertyForm
