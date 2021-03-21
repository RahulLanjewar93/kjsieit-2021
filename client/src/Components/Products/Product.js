import {React,useState,useEffect} from 'react'
import useHistory from 'react-router-dom'
import M from 'materialize-css'

const Product = () => {
    const [loading,setLoading] = useState(false)
    const [companyName,setCompanyName] = useState('')
    const [specifications,setSpecifications] = useState('')
    const [modelName,setModelName] = useState('')
    const [price,setPrice] = useState(0)
    const [stock,setStock] = useState(0)
    const [category,setCategory]=useState('')
    const [categories,setCategories] = useState([])

    const addProduct = async(e)=> {
        setLoading(true)
        const product = {modelName,companyName,specifications,modelName,price,stock,category}
        e.preventDefault();
        const res = await fetch('/products', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...product})
        })
        const data = await res.json()
        console.log(data)
        if (data.error){
            return M.toast({html: `${data.error}`,classes:'rounded red'})
        }
        M.toast({html: 'Created Product Successfully',classes:'rounded green'})
        setLoading(false)
    }

    const getCategories = async()=> {
        const res = await fetch('/category', {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
        setCategories(data)
        if (data.error){
            return M.toast({html: `${data.error}`,classes:'rounded red'})
        }
        M.toast({html: 'Fetched Category Successfully',classes:'rounded green'})
    }

    useEffect(()=>{
        getCategories()
    },[])
    return (
        <div classNameName='section row'>
            <div className='col container'>
            <h3>Add Products</h3>
            <div className="row">
                <form className="col s12" onSubmit={addProduct}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input onChange={(e)=>{setCompanyName(e.target.value)}} id="companyName" type="text" className="validate"></input>
                            <label for="companyName">Company Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input onChange={(e)=>{setModelName(e.target.value)}} id="modelName" type="text" className="validate"></input>
                            <label for="modelName">Model Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input onChange={(e)=>{setPrice(e.target.value)}} id="price" type="number" className="validate"></input>
                            <label for="price">Price</label>
                        </div>
                        <div className="input-field col s12">
                            <label for="specifications">Specifications</label>
                            <textarea onChange={(e)=>{setSpecifications(e.target.value)}} style={{border:'none',borderBottom:'1px solid #9e9e9e'}} id="specifications" type="number" className="validate"></textarea>
                        </div>
                        <div className="input-field col s12">
                            <input onChange={(e)=>{setStock(e.target.value)}} id="stock" type="number" className="validate"></input>
                            <label for="stock">Stock</label>
                        </div>
                        <div className="input-field col s12">
                            <select className='browser-default' onChange={(e)=>{setCategory(e.target.value)}}>
                                <option value='default'>Default For Now</option>
                               {categories.map((category)=>{
                                    return <option key={category._id} value={category._id}>{category.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <input id="submit" type="submit" className={loading?"validate btn blue dsiabled ":"validate btn blue"}></input>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Product
