import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import Products from './Components/Products/Products'
import DashboardTable from './Components/Dashboard/DashboardTable'
<<<<<<< HEAD
import Header from './Components/Dashboard/Header'

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
                <Route path='/Header'>
                    <Header></Header>
                </Route>
                <Route path='/DashboardTable'>
                    <DashboardTable></DashboardTable>
                </Route>
            </Switch>
        </Router>
    );
=======
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
>>>>>>> af108d0ff88605fb752581539430b48feb799a32
}

export default App;
