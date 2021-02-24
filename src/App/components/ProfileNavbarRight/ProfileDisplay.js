import React, { Component } from 'react'
import { Button, Card ,Container, Row, Col, Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'

import './ProfileDisplay.css'

class ProfileDisplay extends Component {
  render() {
    return (
      <div>
        <Container>
          <Link to="/dashboard" style={{color: 'black'}}><i class="fa fa-arrow-left">Back</i></Link>
          <Row>
            <Card>
             <Card.Body stye>
               <div>
                    <h6 style={{alignText:'center'}}><b>My Profile</b></h6>
                    <img className="propertyImage" style={{width: '200px'}} src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?cs=srgb&dl=apartment-balcony-buildings-city-439391.jpg&fm=jpg" />
                    <br /> <br /> <br /> <br />
                  </div>
                <Table responsive>
                  <tbody bordered={ false }>
                    <tr>
                      <td>Name: </td>
                      <td>Pema Flats</td>
                    </tr>
                    <tr>
                      <td>Location: </td>
                      <td>Ruiru</td>
                    </tr>
                    <tr>
                      <td>Landlord: </td>
                      <td>Leonard Kiamaa</td>
                    </tr>
                    <tr>
                      <td>Caretaker: </td>
                      <td>Paul Kariuki</td>
                    </tr>
                  </tbody>

                </Table>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    )
  }
}

export default ProfileDisplay
