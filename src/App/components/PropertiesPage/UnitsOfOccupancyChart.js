import React from "react";
import NVD3Chart from "react-nvd3";
import { Card, Col } from 'react-bootstrap';
import './PropertiesPage.css'

const datum = [
  { key: "Occupied", y: 50, color: "#ff8a65" },
  { key: "Not Occupied", y: 30, color: "#f4c22b" },
];

class UnitsOfOccupancyChart extends React.Component {
  render() {
    return (
      <Card className="UnitsOfOccupancyChart">
        <Card.Header>
            <Card.Title as='h5'>Units of Occupancy</Card.Title>
        </Card.Header>
        <Card.Body>
          <Col sm>
            <NVD3Chart
                id="chart"
                height={300}
                type="pieChart"
                datum={datum}
                x="key"
                y="y"
                donut
                labelType="percent"
            />
          </Col>
      </Card.Body>
    </Card>
    );
  }
}

export default UnitsOfOccupancyChart;
