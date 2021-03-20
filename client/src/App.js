import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import Products from './Components/Products/Products'
import DashboardTable from './Components/Dashboard/DashboardTable'
import Categories from './Components/Categories/Categories'
import SideNav from './Components/SideNav';
function App() {
  return (
    <Router>
      <Switch>
      <SideNav/>
      <Route path='/signup'>
           <SignUp></SignUp>
        </Route>
        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>
        <Route path='/category'>
          <Categories></Categories>
        </Route>
        <Route path='/product'>
          <Products></Products>
        </Route>
        <Route path='/DashboardTable'>
          <DashboardTable></DashboardTable>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
