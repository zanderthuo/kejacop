import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import './BillingPagination.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function BillingPagination() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={5} variant="outlined" />
    </div>
  );
}