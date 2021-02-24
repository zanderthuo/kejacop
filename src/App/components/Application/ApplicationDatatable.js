import React, { Component } from 'react'
import { DataGrid } from 'tubular-react';
import {createColumn} from "tubular-common";
import ApplicationData from '../../data/Application-data'

const columns = [createColumn('id'), createColumn('firstname'), createColumn('lastname'), createColumn('email'), createColumn('mobileno'), createColumn('property'), createColumn('showing'), createColumn('move_in_date'), createColumn('credit_score')];

class ApplicationDatatable extends Component {
  render() {
    return (
      <div>
          <DataGrid columns={columns} dataSource={ApplicationData} gridName="Grid" />
      </div>
    )
  }
}

export default ApplicationDatatable
