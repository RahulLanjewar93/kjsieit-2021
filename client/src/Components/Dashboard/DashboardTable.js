import React, { Component } from 'react'
import M from 'materialize-css'

class DashboardTable extends Component {
    render() {
        // return (
        //     <div className="table-container">
        //         <table>
        //             <ul className="collapsible">
        //                 <li>
        //                     <div className="collapible-header tablehead">
        //                         <tr className="tableheadrow">
        //                             <th>Image</th>
        //                             <th>Model</th>
        //                             <th>Category</th>
        //                             <th>Price</th>
        //                             <th>Stock</th>
        //                         </tr>
        //                     </div>
        //                 </li>
        //                 <li>
        //                     <div className="collapsible-header">
        //                         <tr className="headrow">
        //                             <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" /></td>
        //                             <td>Nokia 2233</td>
        //                             <td>Mobile Phones</td>
        //                             <td>₹3000</td>
        //                             <td>50</td>
        //                         </tr>
        //                     </div>
        //                     <div className="collapsible-body row">
        //                         <div className="col s12 m12 l4">
        //                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" />
        //                         </div>
        //                         <div className="col s12 m12 l4">
        //                             <p><span>Company name: </span>Nokia</p>
        //                             <p><span>Model Name: </span>2233</p>
        //                             <p><span>Price: </span>₹3000</p>
        //                         </div>
        //                         <div className="col s12 m12 l4">
        //                             <p><span>Category: </span>Mobile Phones</p>
        //                             <p><span>Specifications: </span>4GB/64GB, 48mP, 5000mAH</p>
        //                             <p><span>Stock: </span>50</p>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 <li>
        //                     <div className="collapsible-header">
        //                         <tr className="headrow">
        //                         <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" /></td>
        //                             <td>Nokia 2233</td>
        //                             <td>Mobile Phones</td>
        //                             <td>₹3000</td>
        //                             <td>50</td>
        //                         </tr>
        //                     </div>
        //                     <div className="collapsible-body row">
        //                         <div className="col s12 m12 l4">
        //                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" />
        //                         </div>
        //                         <div className="col s12 m12 l4">
        //                             <p><span>Company name: </span>Nokia</p>
        //                             <p><span>Model Name: </span>2233</p>
        //                             <p><span>Price: </span>₹3000</p>
        //                         </div>
        //                         <div className="col s12 m12 l4">
        //                             <p><span>Category: </span>Mobile Phones</p>
        //                             <p><span>Specifications: </span>4GB/64GB, 48mP, 5000mAH</p>
        //                             <p><span>Stock: </span>50</p>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 <li>
        //                     <div className="collapsible-header">
        //                         <tr className="headrow">
        //                         <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" /></td>
        //                             <td>Nokia 2233</td>
        //                             <td>Mobile Phones</td>
        //                             <td>₹3000</td>
        //                             <td>50</td>
        //                         </tr>
        //                     </div>
        //                     <div className="collapsible-body row">
        //                         <div className="col s12 m12 l4">
        //                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" />
        //                         </div>
        //                         <div className="col s12 m12 l4">
        //                             <p><span>Company name: </span>Nokia</p>
        //                             <p><span>Model Name: </span>2233</p>
        //                             <p><span>Price: </span>₹3000</p>
        //                         </div>
        //                         <div className="col s12 m12 l4">
        //                             <p><span>Category: </span>Mobile Phones</p>
        //                             <p><span>Specifications: </span>4GB/64GB, 48mP, 5000mAH</p>
        //                             <p><span>Stock: </span>50</p>
        //                         </div>
        //                     </div>
        //                 </li>
        //             </ul>
        //         </table>

        //     </div>
        // )
        return (
            <>
                <div class="row">
                    <div class="col s12">
                        <ul class="tabs">
                            <li className="col s2"></li>
                            <li className="tab col s4"><a href="#products">Products</a></li>
                            <li className="tab col s4"><a class="active" href="#orders">Orders</a></li>
                            <li className="col s2"></li>
                        </ul>
                    </div>
                    <div id="products" class="col s12" style={{marginTop:'8vmin'}}>
                        <div className='container section'>
                            <div>
                                <div className='divider grey'></div>
                                <h4 style={{ margin: '3vmin' }}>Products</h4>
                                <div className='divider grey'></div>
                            </div>
                            <table className='striped centered'>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Model</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" style={{ height: '6vmin', width: 'auto' }} /></td>
                                        <td>Nokia 2233</td>
                                        <td>Mobile Phones</td>
                                        <td>₹3000</td>
                                        <td>50</td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" style={{ height: '6vmin', width: 'auto' }} /></td>
                                        <td>Nokia 2233</td>
                                        <td>Mobile Phones</td>
                                        <td>₹3000</td>
                                        <td>50</td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" style={{ height: '6vmin', width: 'auto' }} /></td>
                                        <td>Nokia 2233</td>
                                        <td>Mobile Phones</td>
                                        <td>₹3000</td>
                                        <td>50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="orders" class="col s12"  style={{marginTop:'8vmin'}}>
                        <div className='container section'>

                            <div>
                                <div className='divider grey'></div>
                                <h4 style={{ margin: '3vmin' }}>Orders</h4>
                                <div className='divider grey'></div>
                            </div>
                            <table className='striped centered'>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Model</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" style={{ height: '6vmin', width: 'auto' }} /></td>
                                        <td>Nokia 2233</td>
                                        <td>Mobile Phones</td>
                                        <td>₹3000</td>
                                        <td>50</td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" style={{ height: '6vmin', width: 'auto' }} /></td>
                                        <td>Nokia 2233</td>
                                        <td>Mobile Phones</td>
                                        <td>₹3000</td>
                                        <td>50</td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cIM0mLfHYvMSTnjhxgPRtE-HwMCXp5QYVA&usqp=CAU" alt="product" style={{ height: '6vmin', width: 'auto' }} /></td>
                                        <td>Nokia 2233</td>
                                        <td>Mobile Phones</td>
                                        <td>₹3000</td>
                                        <td>50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DashboardTable