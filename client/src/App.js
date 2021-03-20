import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import Products from './Components/Products/Products'
import DashboardTable from './Components/Dashboard/DashboardTable'
import Categories from './Components/Categories/Categories'
import SideNav from './Components/Dashboard/SideNav';
import Header from './Components/Dashboard/Header'

function App() {
    return (
        <Router>
            <SideNav></SideNav>

            <Switch>
                <Route path='/signup'>
                    <SignUp></SignUp>
                </Route>
                <Route path='/signin'>
                    <SignIn></SignIn>
                </Route>
                <Route path='/categories'>
                    <Categories></Categories>
                </Route>
                <Route path='/products'>
                    <Products></Products>
                </Route>
                <Route path='/Header'>
                    <Header></Header>
                </Route>
                <Route path='/dashboard'>
                    <DashboardTable></DashboardTable>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
