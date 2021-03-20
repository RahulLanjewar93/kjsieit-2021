import React, { Component } from 'react'
import M from 'materialize-css'

class Header extends Component {
    render() {
        return (
            <div>
                <div className="header-container">
                    <p>Inventory</p>
                    <input list="categories" name="category" id="category" placeholder="Categories"/>
                    <datalist id="categories">
                        <option value="Mobile Phones" />
                        <option value="Televisions" />
                        <option value="Refridgerators" />
                        <option value="Air Conditioners" />
                        <option value="Laptops" />
                    </datalist>
                </div>
            </div>
        )
    }
}

export default Header
