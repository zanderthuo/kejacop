import React, { Component } from 'react'
import {Button , Modal, Container, Form, Col, Row, Card} from 'react-bootstrap'
// import LandlordDataService from '../../../services/LandlordServices';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import './AddLandlordModal.css'

class AddCaretakerModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      caretaker:[],
      currentCaretaker: {
        first_name: '',
        last_name: '',
        mobilenumber: '',
        email: '',
        account: '',
      },
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = (e) => {
    this.setState({
      currentCaretaker: {
        [e.target.name]: e.target.value
      }});
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newCaretaker = {
          first_name: this.state.first_name,
          last_name:this.state.last_name,
          email: this.state.email,
          account:this.state.account,
          mobilenumber: this.state.mobilenumber,
        }
        console.log(newCaretaker)

        if (newCaretaker.text !== "") {
          const newCaretakers = [...this.state.caretakers, newCaretaker];
          this.setState({
            caretaker: newCaretaker,
            currentCaretaker: {
              first_name: '',
              last_name: '',
              mobilenumber: '',
              email: '',
              account: '',
            }
          })
        }

    //   LandlordDataService.create(data)
    //    .then(res => {
    //        this.setState({
    //          first_name: res.data.first_name,
    //          last_name:res.data.last_name,
    //          email: res.data.email,
    //          account:res.data.account,
    //          mobilenumber:res.data.mobilenumber,
    //        });
    //        console.log(res.data)
    //        console.log(data)
    //      })
    //      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" >
          <Modal.Header closeButton>
            <h4 className="AddBillHeading">ADD CARETAKER</h4>
            <hr />
          </Modal.Header>
          <Modal.Body>
              <Container className="ModalContent">
                  <Row>
                      <Col>
                          <Form>

                            <div className="input-field">
                                <TextField type="text" id="first_name" fullWidth label="First Name" value={this.state.currentCaretaker.first_name} onChange={this.handleOnChange} />
                            </div>
                            <div className="input-field">
                                <TextField type="text" id="last_name" fullWidth label="Last Name" value={this.state.currentCaretaker.last_name} onChange={this.handleOnChange} />
                            </div>
                            <div className="input-field">
                                <TextField type="email" id="email" fullWidth label="Email" value={this.state.currentCaretaker.email} onChange={this.handleOnChange} />
                            </div>
                            <div className="input-field">
                                <TextField type="text" id="mobile_no" fullWidth label="Mobile No" value={this.state.currentCaretaker.mobile_no} onChange={this.handleOnChange} />
                            </div>

                            <div className="input-field">
                                <TextField type="text" id="property" fullWidth label="Property" value={this.state.currentCaretaker.account} onChange={this.handleOnChange} />
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
                    <Button className="btnAddProperty" type="submit" sm onClick={this.handleSubmit}>Add Caretaker</Button>
                  </Col>
              </Modal.Footer>
          </Modal>
      </div>
    )
  }
}

export default AddCaretakerModal
