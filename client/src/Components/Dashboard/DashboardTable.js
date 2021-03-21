import React, {useState,useEffect } from 'react'
import M from 'materialize-css'

const DashboardTable = ()=> {
        const getLowStock = async()=>{
            const res = await fetch(`/getlowstocks`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            console.log(data)
            if (data.length === 0 ){
                return M.toast({html: `All Stocks Are Greater than 50`,classes:'green'})
            }
            data.map((product)=>{
                M.toast({html: `Low stocks for Product:${product.modelName},Value:${product.stock} `,classes:'orange'})
            })
        }

        useEffect(()=>{
            getLowStock()
        },[])

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

export default DashboardTable