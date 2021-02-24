import React, {useState} from 'react';
import MUIDataTable from "mui-datatables";
import TenantsRaisedVacationData from '../../data/TenantsRaisedVacationData'
import EvictButton from './EvictButton'
import EditButton from './EditButton'

import './Datatables.css'


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
  name: "unit",
  label: "Unit",
  options: {
   filter: true,
   sort: false,
 },
},

 {
 name: "vacation_date",
 label: "Vacation Date",
 options: {
  filter: true,
  sort: false,
},
},
];


const options = {
  filterType: 'checkbox',
};

const TenantsRaisedVacationDatatable = () => {

return(
  <div>
  <MUIDataTable
    title={"Raised Vacations"}
    data={TenantsRaisedVacationData}
    columns={columns}
    options={{
    selectableRows: false // <===== will turn off checkboxes in rows
  }}
  />
  </div>
  )
}
export default TenantsRaisedVacationDatatable
