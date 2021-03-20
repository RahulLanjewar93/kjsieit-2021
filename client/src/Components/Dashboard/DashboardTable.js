import React, { Component } from 'react'
import M from 'materialize-css'
import './CSS/dashboardtable.css';

class DashboardTable extends Component {
    render() {
        return (
            <div className="table-container">
                <table>
                    <ul className="collapsible">
                        <li>
                            <div className="collapible-header tablehead">
                                <tr className="tableheadrow">
                                    <th>Image</th>
                                    <th>Model</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                </tr>
                            </div>
                        </li>
                        <hr />
                        <li>
                            <div className="collapsible-header">
                                <tr className="headrow">
                                    <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" /></td>
                                    <td>Nokia 2233</td>
                                    <td>Mobile Phones</td>
                                    <td>₹3000</td>
                                    <td>50</td>
                                </tr>
                            </div>
                            <div className="collapsible-body row">
                                <div className="col s12 m12 l4">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" />
                                </div>
                                <div className="col s12 m12 l4">
                                    <p><span>Company name: </span>Nokia</p>
                                    <p><span>Model Name: </span>2233</p>
                                    <p><span>Price: </span>₹3000</p>
                                </div>
                                <div className="col s12 m12 l4">
                                    <p><span>Category: </span>Mobile Phones</p>
                                    <p><span>Specifications: </span>4GB/64GB, 48mP, 5000mAH</p>
                                    <p><span>Stock: </span>50</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header">
                                <tr className="headrow">
                                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" /></td>
                                    <td>Nokia 2233</td>
                                    <td>Mobile Phones</td>
                                    <td>₹3000</td>
                                    <td>50</td>
                                </tr>
                            </div>
                            <div className="collapsible-body row">
                                <div className="col s12 m12 l4">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" />
                                </div>
                                <div className="col s12 m12 l4">
                                    <p><span>Company name: </span>Nokia</p>
                                    <p><span>Model Name: </span>2233</p>
                                    <p><span>Price: </span>₹3000</p>
                                </div>
                                <div className="col s12 m12 l4">
                                    <p><span>Category: </span>Mobile Phones</p>
                                    <p><span>Specifications: </span>4GB/64GB, 48mP, 5000mAH</p>
                                    <p><span>Stock: </span>50</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header">
                                <tr className="headrow">
                                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" /></td>
                                    <td>Nokia 2233</td>
                                    <td>Mobile Phones</td>
                                    <td>₹3000</td>
                                    <td>50</td>
                                </tr>
                            </div>
                            <div className="collapsible-body row">
                                <div className="col s12 m12 l4">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" />
                                </div>
                                <div className="col s12 m12 l4">
                                    <p><span>Company name: </span>Nokia</p>
                                    <p><span>Model Name: </span>2233</p>
                                    <p><span>Price: </span>₹3000</p>
                                </div>
                                <div className="col s12 m12 l4">
                                    <p><span>Category: </span>Mobile Phones</p>
                                    <p><span>Specifications: </span>4GB/64GB, 48mP, 5000mAH</p>
                                    <p><span>Stock: </span>50</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </table>

            </div>
        )
    }
}

export default DashboardTable