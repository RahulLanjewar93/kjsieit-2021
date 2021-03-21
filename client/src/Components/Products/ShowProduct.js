import {React,useState,useEffect} from 'react'
import MuiAlert from '@material-ui/lab/Alert';
import {useParams} from 'react-router-dom'
import M from 'materialize-css'

var Barcode = require('react-barcode')
var QRCode = require('qrcode.react')

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Products = () => {

    const [product,setProduct] = useState(null)

    const {id} = useParams()
    const getProducts = async()=> {
        const res = await fetch(`/products/${id}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        setProduct(data)
        console.log(product)
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
                <h4>Showing order details for id:{id}</h4>
                  <div className='divider'></div>
                  <div className="section row">
                    {/* <Barcode value={window.location.href}  flat='true' width='2' font='monospace' height='150' textMargin='25'></Barcode> */}
                    <QRCode value={window.location.href}></QRCode>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default Products
