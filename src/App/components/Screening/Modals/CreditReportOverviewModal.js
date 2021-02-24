import React, { Component } from 'react'
import {Button , Modal, Container, Form, Col, Row, Card} from 'react-bootstrap'
// import LandlordDataService from '../../../services/LandlordServices';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

// import './AddLandlordModal.css'

class CreditReportOverviewModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      mobilenumber: '',
      email: '',
      account: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
    // var data = {
    //       first_name: this.state.first_name,
    //       last_name:this.state.last_name,
    //       email: this.state.email,
    //       account:this.state.account,
    //       mobilenumber: this.state.mobilenumber,
    //     }
    //
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
        <Modal.Header>
          <span style={{color: '#000000'}}>CREDIT REPORT OVERVIEW</span>
        </Modal.Header>
          <Modal.Body>
              <Container className="ModalContent">
                  <Row>
                      <Col>
                          <Form>
                            <div className="input-field">
                                <TextField type="text" id="propertyName" fullWidth label="First Name" value={this.state.firstName} onChange={(e) => this.updateFirstname(e.target.value)} />
                            </div>
                            <div className="input-field">
                                <TextField type="text" id="propertyLocation" fullWidth label="Last Name" value={this.state.lastName} onChange={(e) => this.updateLastname(e.target.value)} />
                            </div>
                            <div className="input-field">
                                <TextField type="email" id="propertyLocation" fullWidth label="Email" value={this.state.email} onChange={(e) => this.updateEmail(e.target.value)} />
                            </div>
                            <div className="input-field">
                                <TextField type="text" id="propertyLocation" fullWidth label="Mobile No" value={this.state.mobile_no} onChange={(e) => this.updateMobileNo(e.target.value)} />
                            </div>

                            <div className="input-field">
                                <TextField type="text" id="propertyLocation" fullWidth label="Property" value={this.state.account} onChange={(e) => this.updateProperty(e.target.value)} />
                            </div>

                            {/*<FormControl fullWidth>
                            <InputLabel>Property</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Amount"
                                value={this.state.property}
                                onChange={(e) => this.updateProperty(e.target.value)}
                              >
                                <MenuItem>Ten</MenuItem>
                                <MenuItem>Twenty</MenuItem>
                                <MenuItem>Thirty</MenuItem>
                              </Select>
                            </FormControl>*/}
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

export default CreditReportOverviewModal
