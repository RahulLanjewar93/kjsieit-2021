import {React,useState} from 'react'

const Product = () => {
    const [companyName,setCompanyName] = useState('')
    const [specification,setSpecification] = useState('')
    const [modelName,setModelName] = useState('')
    const [price,setPrice] = useState(0)
    const [stock,setStock] = useState(0)

    const addProduct = async(e)=> {
        const product = {companyName,specification,modelName,price,stock}
        console.log(product)
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
    }
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
                            <textarea onChange={(e)=>{setSpecification(e.target.value)}} style={{border:'none',borderBottom:'1px solid #9e9e9e'}} id="specifications" type="number" className="validate"></textarea>
                        </div>
                        <div className="input-field col s12">
                            <input onChange={(e)=>{setStock(e.target.value)}} id="stock" type="number" className="validate"></input>
                            <label for="stock">Stock</label>
                        </div>
                        <div className="input-field col s12">
                            <select className='browser-default' onChange={(e)=>{setStock(e.target.value)}}>
                                <option value='default' selected>Default For Now</option>
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <input id="submit" type="submit" className="validate btn blue"></input>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Product
