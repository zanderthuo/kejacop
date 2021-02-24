import React, {useState} from 'react';
import MUIDataTable from "mui-datatables";
import TenantsExpiredLeasesData from '../../data/EvictedTenants-Data'
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
  name: "room",
  label: "Room",
  options: {
   filter: true,
   sort: false,
 },
},
];


const options = {
  filterType: 'checkbox',
};

const EvictedTenantsDatatable = () => {

return(
  <div>
  <MUIDataTable
    title={"Evicted Tenants"}
    data={TenantsExpiredLeasesData}
    columns={columns}
    options={{
    selectableRows: false // <===== will turn off checkboxes in rows
  }}
  />
  </div>
  )
}
export default EvictedTenantsDatatable
