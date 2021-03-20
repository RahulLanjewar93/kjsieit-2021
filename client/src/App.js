import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import DashboardTable from './Components/Dashboard/DashboardTable'
import Categories from './Components/Categories/Categories'
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
        <Route path='/category'>
          <Categories></Categories>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
