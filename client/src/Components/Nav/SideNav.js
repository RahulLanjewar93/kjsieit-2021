import { Link, useHistory } from 'react-router-dom'
import {useContext} from 'react'
import {UserContext} from '../../App'

function SideNav() {
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const renderList = ()=>{
        if(state){
            return [
                <li><Link to="/dashboard">Product Inventory</Link></li>,
                <li><Link to="/products">View Sales</Link></li>,
                <li><Link to="/Update">Update Inventory</Link></li>,
                <li><Link to="/addAgent">Add Agent</Link></li>,
                <li><Link to="/product">Add Product</Link></li>,
                <li><Link to="/category">Add Category</Link></li>,
                <li><Link to="/productList">Product List</Link></li>,
                <li><a href="#" onClick={()=>{
                    localStorage.clear()
                    dispatch({type:"CLEAR"})
                    history.push('/')
                }}>Logout</a></li>

            ]
        }
    }
    return (
        <div>
            <nav>
                <div className="nav-wrapper deep-purple">
                    <Link to="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        
                        
                    </ul>
                </div>
            </nav>

            <ul id="slide-out" className="sidenav">
                <li><div className="user-view">
                    <div className="background">
                        <img src="https://images.unsplash.com/photo-1432847712612-926caafaa802?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80" />
                    </div>
                    <a href="#user"><img className="circle" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" /></a>
                    <a href="#name"><span className="white-text name">Admin</span></a>
                    <a href="#email"><span className="white-text email"></span></a>
                </div></li>
                {renderList()}
            </ul>

        </div>
    );
}

export default SideNav;