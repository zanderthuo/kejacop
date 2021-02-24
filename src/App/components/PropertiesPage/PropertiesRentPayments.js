import React from 'react'
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap';
import './PropertyRentPayment.css'

const columns = [
 {
  name: "firstname",
  label: "First Name",
  options: {
   filter: false,
   sort: true,
  }
 },
 {
  name: "lastname",
  label: "Last Name",
  options: {
   filter: false,
   sort: false,
  }
 },
 {
  name: "unit",
  label: "Unit",
  options: {
   filter: false,
   sort: false,
  }
},
  {
   name: "month",
   label: "Month",
   options: {
    filter: true,
    sort: false,
   }
  },
 {
  name: "year",
  label: "Year",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "amount",
  label: "Amount",
  options: {
   filter: false,
   sort: false,
  }
 },
 {
  name: "paymenttype",
  label: "Payment Type",
  options: {
   filter: true,
   sort: false,
  }
 },
];


const data = [
 { firstname: "Joe", lastname: "Mwangi", unit: "G3", month: "June", year: 2020, amount:`Ksh.30,000`, paymenttype: "Mpesa" },
 { firstname: "Joseph", lastname: "Okumu", unit: "G3", month: "June", year: 2020, amount:`Ksh.30,000`, paymenttype: "Mpesa" },
 { firstname: "Timothy", lastname: "Kibet", unit: "G3", month: "June", year: 2020, amount:`Ksh.30,000`, paymenttype: "Mpesa" },
 { firstname: "Elizabeth", lastname: "Amollo", unit: "G3", month: "June", year: 2020, amount:`Ksh.30,000`, paymenttype: "Mpesa" },
 { firstname: "Purity", lastname: "Mwangi", unit: "G3", month: "June", year: 2020, amount:`Ksh.30,000`, paymenttype: "Mpesa" },
];

const options = {
  filterType: 'checkbox',
};

export default function PropertiesRentPayments(){
  return (
    <>
      <Col>
        <Link to="/properties/propertyview" style={{color: 'black'}}><i class="fa fa-arrow-left">Back</i></Link>
        <MUIDataTable
          title={"Rent  Payments"}
          data={data}
          columns={columns}
          style={{background: "#E5E5E5"}}
          options={{
            selectableRows: false
          }}
        />
      </Col>
    </>
  )
}
