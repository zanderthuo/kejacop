import React from "react";
import NVD3Chart from "react-nvd3";
import { Card, Col } from 'react-bootstrap';

const datum = [
  { key: "Vacant Listed", y: 29, color: "#ff8a65" },
  { key: "Vacant Unlisted", y: 30, color: "#f4c22b" },
  { key: "Occupied", y: 64, color: "#04a9f5" },
];

class ListingDoughnutChart extends React.Component {
  render() {
    return (
      <Col md={6}>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Listings</Card.Title>
          </Card.Header>
          <Card.Body className="text-center">
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
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default ListingDoughnutChart;
