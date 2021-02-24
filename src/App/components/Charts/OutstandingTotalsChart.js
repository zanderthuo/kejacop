import React from 'react';
import {Card, Col,} from 'react-bootstrap'
import NVD3Chart from 'react-nvd3';

const datum = [
    {key: "Eden Villa", y: 29, color: "#ff8a65"},
    {key: "Keno Flats", y: 33, color: "#f4c22b"},
    {key: "Visions", y: 32, color: "#04a9f5"},
    {key: "Magunga", y: 196, color: "#3ebfea"},
    {key: "SunView plaza", y: 24, color: "#4F5467"},
];

class OutstandingTotalsChart extends React.Component {

    render() {
        return (
            <Col md={6}>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Outstanding totals per property</Card.Title>
                </Card.Header>
                <Card.Body>
                    <NVD3Chart id="chart" height={300} type="pieChart" datum={datum} x="key" y="y" showLabels={false} />
                </Card.Body>
            </Card>
            </Col>
            );
    }
}

export default OutstandingTotalsChart;
