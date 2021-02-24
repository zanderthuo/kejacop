import React, { Component } from 'react'
import {Button , Modal, Container, Form, Col, Row, Card} from 'react-bootstrap'
// import LandlordDataService from '../../../services/LandlordServices';
import TextField from '@material-ui/core/TextField';

import './AddLandlordModal.css'

class AddHandymanModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      landlords:[],
      currentHandyman: {
        first_name: '',
        last_name: '',
        mobilenumber: '',
        email: '',
        account: '',
      },
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    // this.handleClose = this.handleClose.bind(this)
  }

  handleOnChange = (e) => {
    this.setState({
       currentHandyman: {
         [e.target.name]: e.target.value
       }
     });
  }

  handleSubmit = (e) => {
    e.preventDefault()

    var newHandyman = {
          first_name: this.state.currentHandyman.first_name,
          last_name:this.state.currentHandyman.last_name,
          email: this.state.currentHandyman.email,
          account:this.state.currentHandyman.account,
          mobilenumber: this.state.currentHandyman.mobilenumber,
        }
      console.log(newHandyman)

      if (newHandyman.text !== "") {
        const newHandymans = [...this.state.handymans, newHandyman];
        this.setState({
          handymans: newHandyman,
          currentHandyman: {
            first_name: '',
            last_name: '',
            mobilenumber: '',
            email: '',
            account: '',
          }
        })
      }

      // handleClose()
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
        <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <h4 className="AddBillHeading">ADD HANDYMAN</h4>
            <hr />
          </Modal.Header>
          <Modal.Body>
              <Container className="ModalContent">
                  <Row>
                      <Col>
                          <Form>

                            <div className="input-field">
                                <TextField type="text" id="propertyName" fullWidth label="First Name" value={this.state.currentHandyman.firstName} onChange={this.handleOnChange} />
                            </div>
                            <div className="input-field">
                                <TextField type="text" id="propertyLocation" fullWidth label="Last Name" value={this.state.currentHandyman.lastName} onChange={this.handleOnChange} />
                            </div>
                            <div className="input-field">
                                <TextField type="email" id="propertyLocation" fullWidth label="Email" value={this.state.currentHandyman.email} onChange={this.handleOnChange} />
                            </div>
                            <div className="input-field">
                                <TextField type="text" id="propertyLocation" fullWidth label="Mobile No" value={this.state.currentHandyman.mobile_no} onChange={this.handleOnChange} />
                            </div>

                            <div className="input-field">
                                <TextField type="text" id="propertyLocation" fullWidth label="Property" value={this.state.currentHandyman.account} onChange={this.handleOnChange} />
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
                    <Button className="btnAddProperty" type="submit" sm onClick={this.handleSubmit}>Add Handyman</Button>
                  </Col>
              </Modal.Footer>
          </Modal>
      </div>
    )
  }
}

export default AddHandymanModal
