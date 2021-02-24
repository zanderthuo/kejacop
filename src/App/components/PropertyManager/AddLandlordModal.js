import React, { Component } from 'react'
import {Button , Modal, Container, Form, Col, Row, Card} from 'react-bootstrap'
import LandlordDataService from '../../../services/LandlordServices';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import LandlordDatatable from './LandlordDatatable';

import './AddLandlordModal.css'

class AddLandlordModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      landlords:[],
      currentLandlord:{
        first_name: '',
        last_name: '',
        mobilenumber: '',
        email: '',
        account: '',
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = (e) => {
    this.setState({
       currentLandlord: {
         [e.target.name]: e.target.value
       }
     });
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newLandlord = {
          first_name: this.state.currentLandlord.first_name,
          last_name:this.state.currentLandlord.last_name,
          email: this.state.currentLandlord.email,
          account:this.state.currentLandlord.account,
          mobilenumber: this.state.currentLandlord.mobilenumber,
        }

    console.log(newLandlord)

    if (newLandlord.text !== "") {
      const newLandlords = [...this.state.landlords, newLandlord];
      this.setState({
        landlords: newLandlord,
        currentLandlord: {
          first_name: '',
          last_name: '',
          mobilenumber: '',
          email: '',
          account: '',
        }
      })
    }

    // var data = {
    //       first_name: this.state.first_name,
    //       last_name:this.state.last_name,
    //       email: this.state.email,
    //       account:this.state.account,
    //       mobilenumber: this.state.mobilenumber,
    //     }
    //     console.log(data)
      // LandlordDataService.create(data)
      //  .then(res => {
      //      this.setState({
      //        first_name: res.data.first_name,
      //        last_name:res.data.last_name,
      //        email: res.data.email,
      //        account:res.data.account,
      //        mobilenumber:res.data.mobilenumber,
      //      });
      //      console.log(res.data)
      //      console.log(data)
      //    })
      //    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <h4 className="AddBillHeading">ADD LANDLORD</h4>
            <hr />
          </Modal.Header>
          <Modal.Body>
              <Container className="ModalContent">
                  <Row>
                      <Col>
                          <Form>

                            <div className="input-field">
                                <TextField type="text" id="first_name" fullWidth label="First Name" value={this.state.currentLandlord.firstName} onChange={this.handleOnChange} />
                            </div>
                            <div className="input-field">
                                <TextField type="text" id="last_name" fullWidth label="Last Name" value={this.state.currentLandlord.lastName} onChange={this.handleOnChange} />
                            </div>
                            <div className="input-field">
                                <TextField type="email" id="email" fullWidth label="Email" value={this.state.currentLandlord.email} onChange={this.handleOnChange} />
                            </div>
                            <div className="input-field">
                                <TextField type="text" id="mobile_no" fullWidth label="Mobile No" value={this.state.currentLandlord.mobile_no} onChange={this.handleOnChange} />
                            </div>

                            <div className="input-field">
                                <TextField type="text" id="property" fullWidth label="Property" value={this.state.currentLandlord.account} onChange={this.handleOnChange} />
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
                    <Button className="btnAddProperty" type="submit" sm onClick={this.handleSubmit}>Add Landlord</Button>
                  </Col>
              </Modal.Footer>
          </Modal>
      </div>
    )
  }
}

export default AddLandlordModal
