import React, { useContext } from 'react'
import {GlobalContext} from '../../context/GlobalState'
import { Card,Container, Col, Row, Button } from 'react-bootstrap'
import CustomPagination from '../Pagination/Pagination';

import PropertyStarRating from './PropertyStarRating'

import { useHistory } from "react-router-dom";

import './PropertiesPage.css'

const PropertyList = () => {
    const {properties} = useContext(GlobalContext)
    // console.log(properties)
    const history = useHistory();

    const handleClick = () => {
      history.push("/properties/propertyview");
    }
    return (
        <div>
        <Container>
        <Row>
        {properties.map(properties => (
            <Col sm>
              <Card className="PropCard">
              <PropertyStarRating />
              <br />
              <Card.Header>
                <Card.Img variant="top" src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?cs=srgb&dl=apartment-balcony-buildings-city-439391.jpg&fm=jpg" />
              </Card.Header>
              <Card.Body>
                <Card.Title style={{textAlign:"center"}}>{properties.propertyName}</Card.Title>
                <Card.Subtitle style={{textAlign:"center"}}>{properties.propertyLocation }</Card.Subtitle>
              </Card.Body>
              <div>
                <Button className="btnView" onClick={handleClick}>View</Button>
              </div>
            </Card>
          </Col>
        ))}
        </Row>
        <CustomPagination />
      </Container>
        </div>
    )
}

export default PropertyList
