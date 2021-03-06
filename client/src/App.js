import './App.css';
import React,{useEffect,createContext,useReducer,useContext} from 'react'
import { useHistory, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import ShowProduct from './Components/Products/ShowProduct'
import AddProduct from './Components/Products/AddProduct'
import DashboardTable from './Components/Dashboard/DashboardTable'
import ShowCategory from './Components/Categories/ShowCategory'
import AddCategory from './Components/Categories/AddCategory'
import SideNav from './Components/Nav/SideNav';
import AddAgent from './Components/Dashboard/addAgent';
import Statistics from './Components/Stats/Statistics';
import AddOrders from './Components/Orders/AddOrder'
import ShowOrders from './Components/Orders/ShowOrder'
import { reducer, initialState } from './reducers/userReducer'
import Home from './Components/Dashboard/home';
import ProductList from './Components/productList';


export const UserContext = createContext()

const Routing = ()=>{
    const history = useHistory()
    const{state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        const token = localStorage.getItem("jwt")
        if(token){
            dispatch({type:"USER",payload:token})
            history.push('/dashboard')
        }
        else{
            history.push('/')
        }
    },[])
    return(
        <Switch>
                <Route path='/addAgent'>
                    <SignUp></SignUp>
                </Route>
                <Route path='/Update'>
                    <Home/>
                </Route>
                <Route path='/categories'>
                    <ShowCategory></ShowCategory>
                </Route>
                <Route path='/category'>
                    <AddCategory></AddCategory>
                </Route>
                <Route path='/product/:id'>
                    <ShowProduct></ShowProduct>
                </Route>
                <Route exact path='/product'>
                    <AddProduct></AddProduct>
                </Route>
                <Route path='/dashboard'>
                    <DashboardTable></DashboardTable>
                </Route>
                <Route path='/addAgent'>
                    <AddAgent />
                </Route>
                <Route path='/stats'>
                    <Statistics></Statistics>
                </Route>
                <Route  exact path='/order/:id'>
                    <ShowOrders></ShowOrders>
                </Route>
                <Route path='/order'>
                    <AddOrders></AddOrders>
                </Route>
                <Route path='/productList'>
                    <ProductList/>
                </Route>
            </Switch>
    );
}


function App() {
    const[state,dispatch] = useReducer(reducer,initialState)
    return (
        <UserContext.Provider value={{state,dispatch}}>
        <Router>
            <SideNav></SideNav>
            <Route exact path='/'>
                    <SignIn></SignIn>
                </Route>
                <Routing/>
        </Router>
        </UserContext.Provider>
    );
}

export default App;
