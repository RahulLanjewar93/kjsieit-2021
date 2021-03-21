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
    const [loading,setLoading] = useState(false)
    const [companyName,setCompanyName] = useState('')
    const [specifications,setSpecifications] = useState('')
    const [modelName,setModelName] = useState('')
    const [price,setPrice] = useState(0)
    const [stock,setStock] = useState(0)
    const [category,setCategory]=useState('')
    const [categories,setCategories] = useState([])
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
        setCompanyName(data.companyName)
        setSpecifications(data.specifications)
        setModelName(data.modelName)
        setPrice(data.price)
        setStock(data.stock)
        setCategory(data.category)
        console.log(product)
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
        {console.log(product)}
        <div className='container'>
            <div className='section'>
                <h4>Showing order details for Product <strong> {modelName}</strong></h4>
                  <div className='divider'></div>
                    <div className='row valign-wrapper'>
                        <div className='col s6'>
                        <form className="" onSubmit={updateProduct}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input onChange={(e)=>{setCompanyName(e.target.value)}} required value={companyName} id="companyName" type="text" className="validate" disabled></input>

                                </div>
                                <div className="input-field col s12">
                                    <input onChange={(e)=>{setModelName(e.target.value)}} required id="modelName" value={modelName} type="text" className="validate" disabled></input>

                                </div>
                                <div className="input-field col s12">
                                    <input onChange={(e)=>{setPrice(e.target.value)}} required value={price} id="price" type="number" className="validate" disabled></input>

                                </div>
                                <div className="input-field col s12">
                                    <textarea onChange={(e)=>{setSpecifications(e.target.value)}} required value={specifications} style={{border:'none',borderBottom:'1px solid #9e9e9e'}} id="specifications" type="number" className="validate" disabled>

                                    </textarea>
                                </div>
                                <div className="input-field col s12">
                                    <input onChange={(e)=>{setStock(e.target.value)}} required value={stock} id="stock" type="number" className="validate" disabled></input>

                                </div>
                                <div className="input-field col s12">
                                    <select className='browser-default' disabled onChange={(e)=>{setCategory(e.target.value)}}>
                                        <option value='default'>Default For Now</option>
                                    {categories.map((category)=>{
                                            return <option key={category._id} value={category._id}>{category.name}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                        </form>
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

export default Products
