import React from 'react';
import NVD3Chart from 'react-nvd3';
import { Card, Col } from 'react-bootstrap';

const datum = [
    {
        key: "Cumulative Return",
        values: [{
            "label": "Eden Villa",
            "value": 20,
            "color": "#3ebfea"
        }, {
            "label": "Keno Flats",
            "value": 10,
            "color": "#04a9f5"
        }, {
            "label": "Visions",
            "value": 32,
            "color": "#ff8a65"
        }, {
            "label": "Magunga",
            "value": 58,
            "color": "#1de9b6"
        }, {
            "label": "SunView plaza",
            "value": 45.9,
            "color": "#4C5667"
        }]
    }
];

class UnitsOfOccupancyGraph extends React.Component {

    render() {
        return(
            <Col md={6} xl={8}>
                <Card>
                    <Card.Body className="px-0 py-2">
                        <label style={{ paddingLeft: '20px' }}><b>Units of occupancy</b></label>
                        <NVD3Chart tooltip={{enabled: true}} type="discreteBarChart" datum={datum} x="label" y="value" height={450} showValues />
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default UnitsOfOccupancyGraph;
