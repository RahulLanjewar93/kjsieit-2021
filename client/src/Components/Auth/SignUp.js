import {useState} from 'react'
import M from 'materialize-css'
import { useHistory } from 'react-router-dom'

function SignUp() {
    const history =useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [loading,setLoading] = useState(false)
    const createUser = ()=>{
        setLoading(true)
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            setLoading(false)
            if(data.error){
                M.toast({html:data.error, classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html: data.message, classes:"#43a047 green darken-1"})
                history.push('/')
            }
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="card row" style={{maxWidth:'500px', padding: '10px' ,margin: '200px auto',textAlign:'center'}}>
        <div className='input-field col s12'>
            <input
                placeholder='Name'
                id='name'
                type="text"
                value={name}
                autoComplete='off'
                required
                onChange={(e)=>{setName(e.target.value)}}
            />
        </div>
        <div className='input-field col s12'>
            <input
                placeholder='Email'
                id='email'
                type="text"
                value={email}
                autoComplete='off'
                required
                onChange={(e)=>{setEmail(e.target.value)}}
            />
        </div>
        <div className='input-field col s12'>
            <input
                placeholder='Password'
                id='password'
                type="password"
                value={password}
                autoComplete='off'
                required
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
            />
        </div>
        <div className='input-field col s12'>
            <button style={{width:'100%'}}
                className={loading? 'waves-effect waves-light btn large-btn disabled' : 'waves-effect waves-light btn large-btn'}
                onClick={()=>createUser()}>Add Agent
            </button>
        </div>
    </div>
    );
  }

  export default SignUp;