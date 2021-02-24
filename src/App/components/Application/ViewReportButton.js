import React,{ useState } from 'react'
import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import ViewReportDrawer from './ViewReportDrawer'

const CustomButtonViewReport = styled.button`
  width: 120px;
  height: 30px;
  background: #9595C9;
  border-radius: 20px;
  border: none;
  color: #fff;
`

const useStyles = makeStyles({
    list: {
      width: 450,
      overflowY:  'none',
    },
  });


const ViewReportButton = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }

        setState({ ...state, [anchor]: open });
    };

    const sideList = anchor => (
        <div
         className={classes.list}
          role="presentation"
        onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
         <ViewReportDrawer />
        </div>
      );
  return (
    <>
      <CustomButtonViewReport className="fa fa-eye" onClick={toggleDrawer('right', true)}> View Report</CustomButtonViewReport>
        <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
          {sideList('right')}
        </Drawer>
    </>
  )
}

export default ViewReportButton
