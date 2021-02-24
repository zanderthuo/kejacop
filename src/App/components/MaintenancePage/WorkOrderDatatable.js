import React, {useState} from 'react';
import MUIDataTable from "mui-datatables";
import WorkOrderData from '../../data/WorkOrderData'
import styled from 'styled-components'

const columns = [
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
 }
},
 {
 name: "date_started",
 label: "Date Started",
 options: {
  filter: true,
  sort: false,
}
},
{
  name: "handyman_name",
  label: "Handyman Name",
  options: {
   filter: true,
   sort: false,
  }
},
  {
  name: "notification",
  label: "Notification Via",
  options: {
   filter: true,
   sort: false,
 },
},
 {
  name: "type_of_work",
  label: "Type of work",
  options: {
   filter: true,
   sort: false,
 },
},
 {
 name: "fee_payable",
 label: "Fee Payable",
 options: {
  filter: true,
  sort: false,
},
},
{
name: "payment_status",
label: "Payment Status",
options: {
 filter: true,
 sort: false,
},
},
];


const options = {
  filterType: 'checkbox',
};

const WorkOrderDatatable = () => {

return(
  <div>
  <MUIDataTable
    title={"Work Orders"}
    data={WorkOrderData}
    columns={columns}
    options={{
    selectableRows: false // <===== will turn off checkboxes in rows
  }}
  />
  </div>
  )
}
export default WorkOrderDatatable
