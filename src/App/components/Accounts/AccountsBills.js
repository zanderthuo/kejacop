import React, {Component} from 'react';
import MUIDataTable from "mui-datatables";
import AccountsBillData from '../../data/AccountsBill-data'
import EditButton from './EditButton'
import ArchiveButton from './ArchiveButton'
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";

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
  name: "type",
  label: "Type",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "type_of_transaction",
  label: "Type Of Transaction",
  options: {
   filter: true,
   sort: false,
  }
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
 name: " ",
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
},
];

const options = {
  filterType: 'checkbox',
};

class AccountsBills extends Component {
  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          root: {
            backgroundColor: "#FF000"
          },
          paper: {
            boxShadow: "none"
          }
        },
        MUIDataTableBodyCell: {
          root: {
            backgroundColor: "#FF0000"
          }
        }
      }
    });
  render() {
    return (
      <MUIDataTable
        title={"Incomes and expenses"}
        data={AccountsBillData}
        columns={columns}
        options={{
          selectableRows: false
        }}
      />
    );
  }
}

export default AccountsBills;
