import {React,useState,useEffect} from 'react'
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Products = () => {
    const products = []

    const getProducts = async()=> {
        const res = await fetch('/products', {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
        products.push(data)
        console.log(products)
        if (!data) {
            <Alert severity="error">Some Error Occured</Alert>
        } else {
            <Alert Alert severity="success" > Successfully</Alert >
        }
    }

    useEffect(()=>{
        getProducts();
    },[])
    return (
        <>
        <div className='container'>
          <div className='row'>
            <div className='col s12'>
                <div className='section'>
                  <h4>All Products WOW</h4>
                  <div className='divider'></div>
                  <div className="section row">
                    {products.forEach((product)=>{
                        return(
                            <div class="col s12 m6" key={product._id}>
                                <div class="card">
                                    <div class="card-image">
                                        <img src="https://images.unsplash.com/photo-1612831661941-254341b885e9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80" alt='product_image'></img>
                                    </div>
                                    <div class="card-content">
                                        <span class="card-title">{product.name}</span>
                                        <span class="card-subtitle grey-text">{product.price}</span>
                                        <p>Product Description {product.specification}</p>
                                        <p></p>
                                        <p></p>
                                        <p>Company Name : {product.companyName}</p>
                                    </div>
                                </div>
                        </div>
                        )
                    })}
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default Products
