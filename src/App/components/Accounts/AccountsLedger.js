import React, {Component} from 'react';
import MUIDataTable from "mui-datatables";
import AccountsLedgerData from '../../data/AccountsLedger-Data'

const columns = [
 {
  name: "bill",
  label: "Bill",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "first_name",
  label: "First Name",
  options: {
   filter: true,
   sort: false,
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
  name: "amount",
  label: "Amount",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "summary",
  label: "Summary",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "payment_type",
  label: "Paymnet Type",
  options: {
   filter: true,
   sort: false,
  }
 },
];

const options = {
  filterType: 'checkbox',
};

class AccountsLedger extends Component {
  render() {
    return (
      <MUIDataTable
        title={"Ledger"}
        data={AccountsLedgerData}
        columns={columns}
        options={{
          selectableRows: false
        }}
      />
    );
  }
}

export default AccountsLedger;
