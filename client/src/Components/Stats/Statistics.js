import React, { Component } from 'react'
import './CSS/statistics.css'
import M from 'materialize-css'

class Statistics extends Component {
    render() {
        return (
            <div>
                <h4 style={{margin:'3vmin'}}>Sales Stats</h4>
                <div className="statcard-container row">
                    <div className="statcard col s6 m6 l3">
                        <div className="card-panel">
                            <span>Total</span>
                            <p className="grey-text">10000</p>
                        </div>
                    </div>
                    <div className="statcard col s6 m6 l3">
                        <div className="card-panel">
                            <span>Sold</span>
                            <p className="red-text">2000</p>
                        </div>
                    </div>
                    <div className="statcard col s6 m6 l3">
                        <div className="card-panel">
                            <span>Reserved</span>
                            <p className="orange-text">3000</p>
                        </div>
                    </div>
                    <div className="statcard col s6 m6 l3">
                        <div className="card-panel">
                            <span>In-Stock</span>
                            <p className="green-text">5000</p>
                        </div>
                    </div>
                </div>
                <table className="centered" style={{ width: '90vw', position: 'relative', left: '50 %', transform: 'translate(-50 %)' }}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Image</th>
                            <th>Model Name</th>
                            <th>Category</th>
                            <th>Selling Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>21-03-2021</td>
                            <td><img className="productimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" /></td>
                            <td>Nokia 2233</td>
                            <td>Mobile Phones</td>
                            <td>4000</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>21-03-2021</td>
                            <td><img className="productimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" /></td>
                            <td>Nokia 2233</td>
                            <td>Mobile Phones</td>
                            <td>4000</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>21-03-2021</td>
                            <td><img className="productimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" /></td>
                            <td>Nokia 2233</td>
                            <td>Mobile Phones</td>
                            <td>4000</td>
                            <td>30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Statistics
