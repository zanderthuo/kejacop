import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Properties from './components/properties/Properties';
import Accounts from './components/Accounts';
import Payments from './components/Payments';
import Maintenance from './components/Maintenance';
import Sidebar from './components/Sidebar';
import LoginPage from './components/LoginPage'
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <Router> 
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/properties" component={Properties} />
            <Route path="/accounts" component={Accounts} />
            <Route path="/payments" component={Payments} />
            <Route path="/maintenance" component={Maintenance} />
            <Route path="/login" component={LoginPage} /> 
          </Switch>  
      
        </div>
        <Sidebar /> 
      </Router>
      
    );
  }
}




export default App;
