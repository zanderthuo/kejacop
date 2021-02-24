import React,{ useState } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ScreeningPage from './ScreeningPage'

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


const ViewreportButton = () => {
  const history = useHistory();

  const handleClick = () => {
      history.push("/screening/viewreport");
    }
  return (
    <>
      <CustomButtonViewReport className="fa fa-eye" onClick={handleClick}>View Report</CustomButtonViewReport>
    </>
  )
}

export default ViewreportButton
