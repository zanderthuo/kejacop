import React, {useState} from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from '../../../hoc/_Aux';

import './TenantsPaymentDatatable.scss'

function createData(name, hse_no, property, month, rentProgress, paymentPlan) {
    return { name, hse_no, property, month, rentProgress, paymentPlan };
  }

const rows = [
    createData("Kelvin Okumu", "J5" , "Uzima Apartments", "Jan 2020", "75%", "Twice a month"),
    createData("Jose Mwangi", "JD4" , "Adonai Apartments", "Jan 2020", "100%", "Once a month"),
    createData("Alex Gucci", "F6" , "Makazi Units", "Jan 2020", "50%", "Once a month"),
    createData("Moses Ushuru", "KRA" , "Times Housing", "Jan 2020", "00%", "Twice a month"),
    createData("Maloans Mungai", "GOJ" , "Meddy Apartments", "Jan 2020", "25%", "Twice a month"),
    // createData(6,'James Maina', 'Aden Villa','20/May/2020','Mpesa','Ksh.160,000'),
    // createData(7,'Jane Omollo', 'Visions Place','20/May/2020','Kcb','Ksh.30,000'),
    // createData(8,'Alex Maina', 'Ugetto Villa','20/May/2020','Mpesa','Ksh.160,000'),
    // createData(9,'Peter Okello', 'Kilimani Villas','20/May/2020','COOP','Ksh.50,000'),
    // createData(10,'David Kipchoge', 'Silicon Villa','20/May/2020','COOP','Ksh.72,000'),
  
  ];

function TenantsPaymentDatatable() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        return (
            <Aux>
                <Row>
                    <div className="col-span-12">
                        <Card>
                            <Card.Body>   
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Hse.No</th>
                                        <th>Property</th>
                                        <th>Month</th>
                                        <th>Rent Progress</th>
                                        <th>Payment Plan</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {rows.map((row) => (
                                        <tr onClick={handleShow}>
                                        <td>{row.name}</td>
                                        <td>{row.hse_no}</td>
                                        <td>{row.property}</td>
                                        <td>{row.month}</td>
                                        <td>{row.rentProgress}</td>
                                        <td>{row.paymentPlan}</td>
                                        </tr>
                                        ))}    
                                    
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Aux>
        );
}

export default TenantsPaymentDatatable;
