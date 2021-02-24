import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import MUIDataTable from "mui-datatables";
import TenantsData from '../../data/TenantsData'
import styled from 'styled-components'
import ViewreportButton from './ViewreportButton'

const columns = [
  {
  name: "firstName",
  label: "First Name",
  options: {
   filter: true,
   sort: false,
 }
},
 {
  name: "lastName",
  label: "Last Name",
  options: {
   filter: true,
   sort: false,
 }
},
 {
 name: "emailAddress",
 label: "Email Address",
 options: {
  filter: true,
  sort: false,
}
},
{
name: "mobileNo",
label: "Mobile No",
options: {
 filter: true,
 sort: false,
},
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
  name: "unit",
  label: "Unit",
  options: {
   filter: true,
   sort: false,
 },
},
{
  name: " ",
  options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRender: () => {
            return (
              <ViewreportButton />
            );
          }
        }
},
];


const options = {
  filterType: 'checkbox',
};

const AllTenantsDatatable = () => {

return(
  <div>
  <MUIDataTable
    title={"Manage Existing"}
    data={TenantsData}
    columns={columns}
    options={{
    selectableRows: false // <===== will turn off checkboxes in rows
  }}
  />
  </div>
  )
}
export default AllTenantsDatatable
