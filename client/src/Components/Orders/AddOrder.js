import {React,useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'

const AddOrder = () => {
    const [loading,setLoading] = useState(false)
    const [customerName,setCustomerName] = useState('')
    const [customerPhone,setCustomerPhone] = useState('')
    const [customerAddress,setCustomerAddress] = useState('')
    const [agentName,setAgentName] = useState(0)
    const [products,setProducts] = useState([])
    const [productInfo,setProductInfo] = useState([])

    const history = useHistory()

    const placeOrder = async(e)=> {
        setLoading(true)
        const order = {customerName,customerPhone,customerAddress,productInfo,agentName}
        e.preventDefault();
        const res = await fetch('/orders', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...order})
        })
        const data = await res.json()
        console.log(data)
        if (data.error){
            return M.toast({html: `${data.error}`,classes:'rounded red'})
        }
        M.toast({html: 'Created Product Successfully',classes:'rounded green'})
        setLoading(false)
        history.push(`/order/${data._id}`)
    }

    const getProducts = async()=> {
        const res = await fetch('/products', {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
        setProducts(data)
        if (data.error){
            return M.toast({html: `${data.error}`,classes:'rounded red'})
        }
        M.toast({html: 'Fetched Category Successfully',classes:'rounded green'})
    }

    useEffect(()=>{
        getProducts()
    },[])
    return (
        <div classNameName='section row'>
            <div className='col container'>
            <h3>Place Order</h3>
            <div className="row">
                <form className="col s12" onSubmit={placeOrder}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input onChange={(e)=>{setCustomerName(e.target.value)}} id="customerName" type="text" className="validate"></input>
                            <label for="customerName">Customer Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input onChange={(e)=>{setCustomerPhone(e.target.value)}} id="customerPhone" type="number" className="validate"></input>
                            <label for="customerPhone">Customer Phone</label>
                        </div>
                        <div className="input-field col s12">
                            <input onChange={(e)=>{setAgentName(e.target.value)}} id="agentName" type="text" className="validate"></input>
                            <label for="agentName">Agent Name</label>
                        </div>
                        <div className="input-field col s12">
                            <label for="customerAddress">Address</label>
                            <textarea onChange={(e)=>{setCustomerAddress(e.target.value)}} style={{border:'none',borderBottom:'1px solid #9e9e9e'}} id="customerAddress" type="number" className="validate"></textarea>
                        </div>
                        <div className="input-field col s12">
                            <select className='browser-default' onChange={(e)=>{setProductInfo(e.target.value)}}>
                                <option value='default'>Default For Now</option>
                               {products.map((product)=>{
                                    return <option key={product._id} value={product._id}>{product.modelName}</option>
                                })}
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <input id="submit" type="submit" className={loading?"validate btn deep-purple dsiabled ":"validate btn deep-purple"}></input>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default AddOrder
