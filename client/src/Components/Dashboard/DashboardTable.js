import React, {useState,useEffect } from 'react'
import M from 'materialize-css'
import './CSS/dashboardtable.css';

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
                return M.toast({html: `All Stocks Are Greater than 50`,classes:'rounded blue'})
            }
            data.map((product)=>{
                M.toast({html: `Low stocks for Product:${product.modelName},Value:${product.stock} `,classes:'rounded orange'})
            })
        }

        useEffect(()=>{
            getLowStock()
        },[])

        return (
            <>
            <div className='container section'>
                <h4>Orders </h4>
                <div className='divider'></div>
                <table className='striped'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                </tr>
                <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                </tr>
                <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className='container section'>
                <h4>Products </h4>
                <div className='divider'></div>
                <table className='striped'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                </tr>
                <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                </tr>
                <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                </tr>
                </tbody>
            </table>
            </div>
            </>
        )
}

export default DashboardTable