import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";
import ApplicationData from '../../data/Application-data'

const columns = [
  {
    name: "id",
    label: "ID",
  },
  {
    name: "firstname",
    label: "First Name",
  },
  {
    name: "lastname",
    label: "Last Name",
  },
  {
    name: "email",
    label: "Email",
  }
];

const options = {
  filterType: 'checkbox',
};

class ApprovedRequestDatatable extends Component {
  render() {
    return (
      <MUIDataTable
        title={"Approved Requests"}
        columns={columns}
        data={ApplicationData}
        options={{
          selectableRows: false // <===== will turn off checkboxes in rows
          }}
        />
    );
  }
}

export default ApprovedRequestDatatable;
