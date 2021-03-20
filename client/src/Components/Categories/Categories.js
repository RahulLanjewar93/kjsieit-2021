import React from 'react'
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const addCategory = async(e)=> {
    e.preventDefault();
    const userDetails = { }
    const res = await fetch('/category', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...userDetails })
    })
    const data = await res.json()
    console.log(data)
    if (data.error) {
        <Alert severity="error">Some Error Occured:{data.error}</Alert>
    } else {
        <Alert Alert severity="success" > Logged In Successfully</Alert >
    }
}

const Categories = () => {
    return (
        <form onSubmit={addCategory}>
            <input name='name' placeholder='Name Here'></input>
            <input name='description' placeholder='Description Here'></input>
            <button type='submit' >Submit</button>
        </form>
    )
}

export default Categories
