import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import ShowProduct from './Components/Products/ShowProduct'
import AddProduct from './Components/Products/AddProduct'
import DashboardTable from './Components/Dashboard/DashboardTable'
import ShowCategory from './Components/Categories/ShowCategory'
import AddCategory from './Components/Categories/AddCategory'
import SideNav from './Components/Dashboard/SideNav';
import Header from './Components/Dashboard/Header'
import Statistics from './Components/Stats/Statistics'

function App() {
    return (
        <Router>
            <SideNav></SideNav>
            <Header></Header>
            <Switch>
                <Route path='/signup'>
                    <SignUp></SignUp>
                </Route>
                <Route path='/signin'>
                    <SignIn></SignIn>
                </Route>
                <Route path='/categories'>
                    <ShowCategory></ShowCategory>
                </Route>
                <Route path='/category'>
                    <AddCategory></AddCategory>
                </Route>
                <Route exact path='/product'>
                    <AddProduct></AddProduct>
                </Route>
                <Route path='/product/:id'>
                    <ShowProduct></ShowProduct>
                </Route>
                <Route path='/dashboard'>
                    <DashboardTable></DashboardTable>
                </Route>
                <Route path='/stats'>
                    <Statistics></Statistics>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
