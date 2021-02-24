import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";
import ApplicationData from '../../data/Application-data'
import ViewReportButton from './ViewReportButton'

const columns = [
  {
  name: "firstname",
  label: "First Name",
  options: {
   filter: true,
   sort: false,
 }
},
 {
  name: "lastname",
  label: "Last Name",
  options: {
   filter: true,
   sort: false,
 }
},
 {
 name: "email",
 label: "Email Address",
 options: {
  filter: true,
  sort: false,
}
},
{
  name: "mobileno",
  label: "Mobile No",
  options: {
   filter: true,
   sort: false,
  }
},
{
 name: "property",
 label: "Property",
 options: {
  filter: true,
  sort: false,
}
},
  {
  name: "move_in_date",
  label: "Move In Date",
  options: {
   filter: true,
   sort: false,
 }
},
{
name: "showing",
label: "Showing",
options: {
 filter: true,
 sort: false,
}
},

{
  name: " ",
  options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRender: () => {
            return (
              <ViewReportButton />
            );
          }
        }
},

];

class ProspectiveTenantsDatatable extends Component {
  render() {
    return (
      <div>
          <MUIDataTable
            title={"Prospective Tenants"}
            columns={columns}
            data={ApplicationData}
            options={{
              selectableRows: false // <===== will turn off checkboxes in rows
            }}
          />
      </div>
    )
  }
}

export default ProspectiveTenantsDatatable
