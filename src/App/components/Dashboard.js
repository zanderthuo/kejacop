import React, { Component } from 'react';
import StatsCards from './StatsCards/StatsCards';

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