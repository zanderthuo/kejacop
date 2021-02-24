import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import MUIDataTable from "mui-datatables";
import TenantsData from '../../data/TenantsData'
import styled from 'styled-components'
import EvictionNoticeModal from './EvictionNoticeModal'
import EvictButton from './EvictButton'
import EditButton from './EditButton'


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
 },
},
 {
  name: "rent_expected",
  label: "Rent Expected",
  options: {
   filter: true,
   sort: false,
 },
},
 {
 name: "due_date",
 label: "Due Date",
 options: {
  filter: true,
  sort: false,
},
},
{
name: "lease_ends",
label: "Lease Ends",
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
              <EditButton />
            );
          }
        }
},
{
  name: "",
  options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRender: () => {
            return (
              <EvictButton />
            );
          }
        }
}
];


const options = {
  filterType: 'checkbox',
};

const TenantsDatatable = () => {

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
export default TenantsDatatable
