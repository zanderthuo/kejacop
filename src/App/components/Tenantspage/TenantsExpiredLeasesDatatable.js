import React, {useState} from 'react';
import MUIDataTable from "mui-datatables";
import TenantsExpiredLeasesData from '../../data/TenantsExpiredLeasesData'
import RenewButton from './RenewButton'
import ArchiveButton from './ArchiveButton'

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
 name: "expiry_date",
 label: "Expiry Date",
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
              <RenewButton />
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
              <ArchiveButton />
            );
          }
        }
}
];


const options = {
  filterType: 'checkbox',
};

const TenantsExpiredLeasesDatatable = () => {

return(
  <div>
  <MUIDataTable
    title={"Expired Leases"}
    data={TenantsExpiredLeasesData}
    columns={columns}
    options={{
    selectableRows: false // <===== will turn off checkboxes in rows
  }}
  />
  </div>
  )
}
export default TenantsExpiredLeasesDatatable
