import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import MUIDataTable from "mui-datatables";

import './PaymentsDatatable.css'

const columns = [
 {
  name: "tenant",
  label: "Tenant",
  options: {
   filter: true,
   sort: true,
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
  name: "type",
  label: "Type",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "amountdue",
  label: "Amount Due",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "dueon",
  label: "Due On",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "dayslate",
  label: "Days Late",
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

const data = [
  { tenant: "Joe James", property: "Uzima Flats", type: "Rent", amountdue: `Ksh. 4,000`, dueon: "24/08/2020", dayslate: 20, balance: `Ksh.4,000`  },
  { tenant: "John Walsh", property: "Uzima Flats", type: "Rent", amountdue: `Ksh. 4,000`, dueon: "24/08/2020", dayslate: 20, balance: `Ksh.4,000`  },
  { tenant: "Bob Collymore", property: "Uzima Flats", type: "Rent", amountdue: `Ksh. 4,000`, dueon: "24/08/2020", dayslate: 20, balance: `Ksh.4,000`  },
  { tenant: "Michael James", property: "Uzima Flats", type: "Rent", amountdue: `Ksh. 4,000`, dueon: "24/08/2020", dayslate: 20, balance: `Ksh.4,000`  },
  { tenant: "Tim Hanks", property: "Uzima Flats", type: "Rent", amountdue: `Ksh. 4,000`, dueon: "24/08/2020", dayslate: 20, balance: `Ksh.4,000`  },
];

const options = {
  filterType: 'checkbox',
};

export default function PaymentsDatatable() {
  return (
    <div>
      <Col>
        <MUIDataTable
          title={"Payments"}
          data={data}
          columns={columns}
          options={{
            selectableRows: false,
          }}
        />
      <hr />
        <div>
          <p>Total Outstanding Recievables totalling Kshs. 125,000</p>
        </div>
      <hr />
      </Col>
    </div>
  )
}
