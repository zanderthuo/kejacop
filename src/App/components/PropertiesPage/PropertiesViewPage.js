import React from 'react'
import { Button, Card ,Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import styled from 'styled-components';

import UnitsOfOccupancyChart from './UnitsOfOccupancyChart.js'
import PropertyRatings from './PropertyRating'

import PropertiesInfo from './PropertiesInfo'

import './PropertiesPage.css'


const CustomButton = styled.button`
  position: absolute;
  background: #9595C9;
  border-radius: 20px;
  position: absolute;
  width: 170px;
  height: 47px;
  /* left: 570px; */
  left: 50vh;
  top: -5vh;
  color: #fff;
  border: none;

`

class PropertiesViewPage extends React.Component{
  render(){
    return(
      <div>
        <Container>
          <Row>
            <Col sm>
              <Link to="/properties" style={{color: 'black'}}><i class="fa fa-arrow-left">Back</i></Link>
              <br />
            </Col>
              <br /><br />
            <Col sm>
              <Link to="/properties/:id/rentpayments"><CustomButton><i className="fa fa-eye">View Rent Payment</i></CustomButton></Link>
            </Col>
          </Row>

          <Row>
              <PropertiesInfo />
          </Row>

          <Row>
                <Col sm>
                  <UnitsOfOccupancyChart />
                </Col>
                <Col sm>
                  <PropertyRatings />
                </Col>
          </Row>

        </Container>
      </div>
    );
  }

}

export default PropertiesViewPage
