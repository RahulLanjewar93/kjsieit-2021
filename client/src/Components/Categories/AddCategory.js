import { React, useState } from 'react'
import { useHistory } from 'react-router-dom'
import M from 'materialize-css'

const Category = () => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)

    const addCategory = async (e) => {
        setLoading(true)
        const category = { name, description }
        e.preventDefault();
        const res = await fetch('/category', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({ ...category })
        })
        const data = await res.json()
        if (data.error) {
            return M.toast({ html: `${data.error}`, classes: 'rounded red' })
        }
        M.toast({ html: 'Created Category Successfully', classes: 'rounded green' })
        console.log(data)
        history.push(`/product`)
    }
    return (
        <div class="row" style={{ margin: '3vmin', marginTop:'15vmin'}}>
            <div className="col s1 m2 l3"></div>
            <div class="col s10 m8 l6">
                <div class="card-panel" style={{ textAlign: 'center', paddingBottom: '0' }}>
                    <h4 style={{margin:'0', marginBottom:'2vmin'}}>Add Category</h4>
                    <div className="row  align-center">
                        <form className="col s12" onSubmit={addCategory}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input onChange={(e) => { setName(e.target.value) }} id="name" type="text" className="validate"></input>
                                    <label for="name">Category Name</label>
                                </div>
                                <br/>
                                <div className="input-field col s12">
                                    <textarea onChange={(e) => { setDescription(e.target.value) }} style={{ border: 'none', borderBottom: '1px solid #9e9e9e', outline:'none', fontSize:'2.5vmin', padding:'2vmin' }} id="description" type="number" className="validate"></textarea>
                                    <label for="description">Description</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="submit" type="submit" className={loading ? "validate btn deep-purple disabled" : "validate btn deep-purple"} style={{margin:'0'}}></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Category
