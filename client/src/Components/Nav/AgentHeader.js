import React, { Component } from 'react'
import M from 'materialize-css'
import './CSS/header.css'

class AgentHeader extends Component {
    render() {
        return (
            <div>
                <div className="header-container row">
                    <input className="col s3 l2" list="categories" name="category" id="category" placeholder="Categories" />
                    <datalist id="categories">
                        <option value="Mobile Phones" />
                        <option value="Televisions" />
                        <option value="Refridgerators" />
                        <option value="Air Conditioners" />
                        <option value="Laptops" />
                    </datalist>
                    <div className="col l6 s3"></div>
                    <div className="col s3 l2">
                        <a className="addstuff" href="#">
                            <i className="material-icons" style={{'position':'relative', 'top':'0.7vmin', 'right':'1.5vmin'}}>add</i>
                            <span className="hide-on-med-and-down">Product</span>Request
                        </a>
                    </div>
                    <div>
                        <input className="col s3 l2" id="search" type="search" placeholder="Search" required />
                        <label className="col l1 searchicon hide-on-med-and-down" for="search"><i className="material-icons">search</i></label>
                    </div>
                </div>
            </div>
        )
    }
}

export default AgentHeader
