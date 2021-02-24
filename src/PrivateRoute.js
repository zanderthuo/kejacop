import React from 'react';
import { Route,Redirect,  useHistory } from 'react-router-dom';

function PrivateRoute({ component: Component,  ...rest }) {

  return(
    <Route
     {...rest}
      component={(props) =>
         localStorage.getItem("user") ? (
      <Component {...props} />
    ) : (
      <Redirect to='/signin' />
    )}
    />
  );
}

export default PrivateRoute;
