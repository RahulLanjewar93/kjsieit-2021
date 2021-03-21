import {React,useState,useEffect} from 'react'
import MuiAlert from '@material-ui/lab/Alert';
import {useParams} from 'react-router-dom'
import M from 'materialize-css'
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Products = () => {
    const products = []
    const {id} = useParams()
    console.log(id)
    const getProducts = async()=> {
        const res = await fetch(`/products/${id}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
        if (data.error){
            return M.toast({html: `${data.error}`,classes:'rounded red'})
        }
        M.toast({html: 'Fetched Category Successfully',classes:'rounded green'})
    }

    useEffect(()=>{
        getProducts();
    },[])

    return (
        <>
        <img id="barcode"/>
        <div className='container'>
          <div className='row'>
            <div className='col s12'>
                <div className='section'>
                  <h4>All Products WOW</h4>
                  <div className='divider'></div>
                  <div className="section row">
                    <h4>Showing order details for id:{id}</h4>

                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default Products
