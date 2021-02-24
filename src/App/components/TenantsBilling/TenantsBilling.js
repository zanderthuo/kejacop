import React, {useState} from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from '../../../hoc/_Aux';
import BillingModal from '../TenantsBillingModal/TenantsBillingModal'

import './TenantsBilling.scss'

function createData(bill_no, tenantName, property, date, paymentType, amount) {
    return { bill_no, tenantName, property, date, paymentType, amount };
  }

const rows = [
    createData(1,'James Maina', 'Aden Villa','20/May/2020','Mpesa','Ksh.160,000'),
    createData(2,'Jane Omollo', 'Visions Place','20/May/2020','Kcb','Ksh.30,000'),
    createData(3,'Alex Maina', 'Ugetto Villa','20/May/2020','Mpesa','Ksh.160,000'),
    createData(4,'Peter Okello', 'Kilimani Villas','20/May/2020','COOP','Ksh.50,000'),
    createData(5,'David Kipchoge', 'Silicon Villa','20/May/2020','COOP','Ksh.72,000'),
    // createData(6,'James Maina', 'Aden Villa','20/May/2020','Mpesa','Ksh.160,000'),
    // createData(7,'Jane Omollo', 'Visions Place','20/May/2020','Kcb','Ksh.30,000'),
    // createData(8,'Alex Maina', 'Ugetto Villa','20/May/2020','Mpesa','Ksh.160,000'),
    // createData(9,'Peter Okello', 'Kilimani Villas','20/May/2020','COOP','Ksh.50,000'),
    // createData(10,'David Kipchoge', 'Silicon Villa','20/May/2020','COOP','Ksh.72,000'),
  
  ];

function TenantsBilling() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>   
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>Bill No</th>
                                        <th>Tenant Name</th>
                                        <th>Property</th>
                                        <th>Date</th>
                                        <th>Payment Type</th>
                                        <th>Amount</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {rows.map((row) => (
                                        <tr onClick={handleShow}>
                                        <td>{row.bill_no}</td>
                                        <td>{row.tenantName}</td>
                                        <td>{row.property}</td>
                                        <td>{row.date}</td>
                                        <td>{row.paymentType}</td>
                                        <td>{row.amount}</td>
                                        </tr>
                                        ))}    
                                    
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <BillingModal 
            show={show}
            onHide={handleClose}
          />
            </Aux>
        );
}

export default TenantsBilling;
