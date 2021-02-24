import React, {Component} from 'react'
import MUIDataTable from "mui-datatables";
import PropertyManagersData from '../../../App/data/PropertyManagersData'

const columns = [
 {
  name: "first_name",
  label: "First Name",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "last_name",
  label: "Last Name",
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
  name: "account",
    label: "Account",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "type",
  label: "Type",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "amount",
  label: "Amount",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "payment_type",
  label: "Payment Type",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "balance",
  label: "Balance",
  options: {
   filter: true,
   sort: false,
  }
 },
];

const options = {
  filterType: 'checkbox',
  selectableRows : false
};

class PropertyManagerReportsDatatable extends Component {
  render() {
    return (
      <>
      <MUIDataTable
        title={"Landlords"}
        data={PropertyManagersData}
        columns={columns}
        options={options}
      />
    <hr />
      <p>Hello</p>
    <hr />
    </>
    );
  }
}

export default PropertyManagerReportsDatatable;
