import React from 'react'
import { Button, Col, Container, Card, Dropdown, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { Popconfirm, message } from 'antd';

const CustomButtonAssign = styled.button`
    width: 150px;
    height: 40px;
    background: #446E7B;
    color: #fff;
    border-radius: 20px;
    border: none;
`;

const CustomBtnSelect = styled.select`
  background: #9999FF;
  border-radius: 20px;
  border: none;
  height: 30px;
  color: #fff;
`;

export default function MaintenanceDrawer() {

    function confirm (e){
      console.log(e);
      message.success('Click on Yes');
    }

    function cancel(e){
      console.log(e);
      message.error('Click on No');
    }

   return (
      <>
        <Row style={{display: 'no-flex', justifyContent: 'center'}}>
          <Container sm>
            <Card>
              <Card.Header>
                <h4><b>Assign work</b></h4>
              </Card.Header>
              <Card.Body>
                <Col sm>
                  <ul style={{listStyle:'none', textAlign: 'center'}}>
                      <li>
                          <span><b>House Number :</b> 12j</span>
                      </li>
                      <br /> <br /> <br />
                      <li>
                          <span><b>Type of Service :</b>  Plumbing</span>
                      </li>
                      <br /> <br /> <br />
                      <li>
                          <span><b>Location :</b> Kitchen</span>
                      </li>
                      <br /> <br /> <br />
                      <li>
                          <span><b>Date/Time :</b> 9/05/2020 at 10.00am</span>
                      </li>
                      <br /> <br /> <br />
                      <li>
                          <span><b>Price Estimate :</b> Kshs. 200</span>
                      </li>
                      <br /> <br /> <br />
                      <CustomBtnSelect>
                          <option selected>Choose Plumber</option>
                          <option>Kinuthia</option>
                          <option>Kamau</option>
                      </CustomBtnSelect>
                  </ul>
                </Col>
              </Card.Body>
              <Card.Footer>
                <Popconfirm placement="top" onConfirm={confirm} okText="Yes" cancelText="No">
                  <CustomButtonAssign><Link to="/maintenance/addworkorder">Assign</Link></CustomButtonAssign>
                </Popconfirm>
              </Card.Footer>
            </Card>
          </Container>
        </Row>
      </>
    );
}
