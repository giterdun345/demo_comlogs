import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

// components 
import Dashboard from './components/dashboard/Dashboard'
import DemoLanding from './components/DemoLanding'
import UserDashboard from './components/UserDashboard'
import AdminDashboard from './components/AdminDashboard'

//toastify 
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure()  

function App() {

  return (
    <Fragment>
      <Router>
          <Switch>
            <Route exact path="/" component={DemoLanding}/>
            <Route exact path='/userDashboard' component={UserDashboard} />
            <Route exact path='/adminDashboard' component={AdminDashboard} />
          </Switch>
      </Router>
    </Fragment>

  );
}

export default App;
