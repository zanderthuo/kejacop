import React, { Component } from 'react';
import StatsCards from '../StatsCards/StatsCards';
import {Row} from 'react-bootstrap'
import ListingDoughnutChart from '../Charts/ListingDoughnutChart';
import OutstandingTotalsChart from '../Charts/OutstandingTotalsChart';
// import BarChart from './BarDiscreteChart/BarDiscreteChart';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <StatsCards />
        <Row>
          <OutstandingTotalsChart />
          <ListingDoughnutChart />
        </Row>
      </div>
    );
  }
}

export default Dashboard;
