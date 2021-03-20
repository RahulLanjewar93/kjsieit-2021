import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import DashboardTable from './Components/Dashboard/DashboardTable'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/signup'>
          <SignUp></SignUp>
        </Route>
        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>
        <Route path='/DashboardTable'>
          <DashboardTable></DashboardTable>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
