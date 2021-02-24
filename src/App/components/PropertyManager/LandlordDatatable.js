import React, {Component} from 'react'
import MUIDataTable from "mui-datatables";
import LandlordData from '../../../App/data/LandlordData'
import EditButton from './EditButton'
import ArchiveButton from './ArchiveButton'
import ReportButton from './ReportButton';

function LandlordDatatable(props) {
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
      name: "email",
      label: "Email Address",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
      name: "mobile_no",
        label: "Mobile No",
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
      name: " ",
      options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRender: () => {
            return (
              <ReportButton />
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
      selectableRows : false
    };

    const data = [
      {
        customBodyRender:(value, tableMeta, updateValue) => {
          const landlords = props.landlords;
            const listLandlords = landlords.map(landlord => (
                <div key={landlord}>
                  {landlords}
                </div>
            ))
            return (
              <div>{listLandlords}</div>
            )
        }
      }
    ];


    return (
      <MUIDataTable
        title={"Landlords"}
        data={LandlordData}
        columns={columns}
        options={options}
      />
    );
}

export default LandlordDatatable;
