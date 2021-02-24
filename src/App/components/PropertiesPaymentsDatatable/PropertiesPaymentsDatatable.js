import React, {useState} from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from '../../../hoc/_Aux';

import './PropertiesPaymentsDatatable.scss'

function createData(name, units, location, month, rentProgress, caretaker) {
    return { name, units, location, month, rentProgress, caretaker };
  }

const rows = [
    createData("Meddy Apartments", "18/18" , "Kirigiti", "Jan 2020", "75%", "Peter Wafula"),
    createData("Makazi Suits", "17/18" , "Kiambu", "Jan 2020", "100%", "Joseph Okuku"),
    createData("Times Homes", "19/24" , "Thindigua", "Jan 2020", "50%", "Mwana Wefu"),
    createData("Adonai Apartments", "52/54" , "Ruaka", "Jan 2020", "00%", "John Mweru"),
    createData("Uzima Apartments", "24/24" , "Thika", "Jan 2020", "25%", "Kelvin Kamau"),
    // createData(6,'James Maina', 'Aden Villa','20/May/2020','Mpesa','Ksh.160,000'),
    // createData(7,'Jane Omollo', 'Visions Place','20/May/2020','Kcb','Ksh.30,000'),
    // createData(8,'Alex Maina', 'Ugetto Villa','20/May/2020','Mpesa','Ksh.160,000'),
    // createData(9,'Peter Okello', 'Kilimani Villas','20/May/2020','COOP','Ksh.50,000'),
    // createData(10,'David Kipchoge', 'Silicon Villa','20/May/2020','COOP','Ksh.72,000'),
  
  ];

function PropertiesPaymentsDatatable() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        return (
            <Aux>
                <Row>
                    <div className="col-xs-12">
                        <Card>
                            <Card.Body>   
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Units</th>
                                        <th>Location</th>
                                        <th>Month</th>
                                        <th>Rent Progress</th>
                                        <th>Caretaker</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {rows.map((row) => (
                                        <tr onClick={handleShow}>
                                        <td>{row.name}</td>
                                        <td>{row.units}</td>
                                        <td>{row.location}</td>
                                        <td>{row.month}</td>
                                        <td>{row.rentProgress}</td>
                                        <td>{row.caretaker}</td>
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

export default PropertiesPaymentsDatatable;
