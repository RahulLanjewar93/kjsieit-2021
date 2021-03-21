import {React,useState,useEffect} from 'react'
import MuiAlert from '@material-ui/lab/Alert';
import {useParams} from 'react-router-dom'
import M from 'materialize-css'

var Barcode = require('react-barcode')
var QRCode = require('qrcode.react')

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ShowOrder = () => {
    const [loading,setLoading] = useState(false)
    const [customerName,setCustomerName] = useState('')
    const [customerPhone,setCustomerPhone] = useState('')
    const [customerAddress,setCustomerAddress] = useState('')
    const [agentName,setAgentName] = useState(0)
    const [products,setProducts] = useState({})

    const {id} = useParams()
    const getProducts = async()=> {
        const res = await fetch(`/orders/${id}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
        setCustomerName(data.customerName)
        setCustomerAddress(data.customerAddress)
        setCustomerPhone(data.customerPhone)
        setAgentName(data.agentName)
        setProducts({
            name:data.productInfo.modelame,
            price:data.productInfo.price
        })
        if (data.error){
            return M.toast({html: `${data.error}`,classes:'rounded red'})
        }
        M.toast({html: 'Fetched Category Successfully',classes:'rounded green'})
    }

    const updateProduct = ()=>{
        console.log("Hi")
    }

    useEffect(()=>{
        getProducts();
    },[])

    return (
        <>
        <div className='container'>
            <div className='section'>
                <h4>Showing order details for Order</h4>
                  <div className='divider'></div>
                    <div className='row valign-wrapper'>
                        <div className='col s6'>
                        <h3>Customer Name :{customerName}</h3>
                        <h3>Customer Address :{customerAddress}</h3>
                        <h3>Customer Phone : {customerPhone}</h3>
                        <h3>Agent Name :{agentName}</h3>


                        </div>
                        <div className='col s6 center-align'>
                            <QRCode value={window.location.href}></QRCode>
                        </div>
                    </div>
            </div>
        </div>
        </>
    );
}

export default ShowOrder
