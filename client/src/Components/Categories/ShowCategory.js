import React from 'react'
import MuiAlert from '@material-ui/lab/Alert';
import {useState} from 'react'
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const Categories = () => {
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')

    const addCategory = async (e)=> {
        e.preventDefault();
        const res = await fetch('/category', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name:name,description:description })
        })
        const data = await res.json()
        console.log(data)
        if (data.error) {
            <Alert severity="error">Some Error Occured:{data.error}</Alert>
        } else {
            <Alert Alert severity="success" > Logged In Successfully</Alert >
        }
    }

    return (
        <div class="row center-align">
            <form class="col s6" >
                <div class="row">
                    <div class="input-field col s6">
                        <input onChange={(e)=>{setName(e.target.value)}} id="first_name" type="text" class="validate"></input>
                        <label for="first_name">Category Name</label>
                    </div>
                    <div class="input-field col s6">
                        <input  onChange={(e)=>{setDescription(e.target.value)}} id="last_name" type="text" class="validate"></input>
                        <label for="last_name">Category Description</label>
                    </div>
                    <div class="input-field col s6">
                        <input  onClick={(e)=>{addCategory(e)}} id="Submit" type="submit" class="validate"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Categories
