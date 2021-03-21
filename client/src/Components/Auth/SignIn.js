import { useState, useContext } from 'react'
import M from 'materialize-css'
import {UserContext} from '../../App'
import { useHistory } from 'react-router-dom'

function SignIn() {
<<<<<<< HEAD
    //const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const signInUser = () => {
        setLoading(true)
        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                password
            })
        }).then(res => res.json())
            .then(data => {
                setLoading(false)
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }
                else {
                    localStorage.setItem("jwt", data.token)
                    //dispatch({type:"USER",payload:data.token})
                    M.toast({ html: "Signed In Successully", classes: "#43a047 green darken-1" })
                    history.push('/dashboard')
                }
            }).catch(error => {
                console.log(error)
            })
    }
=======
          const {state,dispatch} = useContext(UserContext)
          const history =useHistory()
          const [name,setName] = useState("")
          const [password,setPassword] = useState("")
          const [loading,setLoading] = useState(false)
          const signInUser = ()=>{
              setLoading(true)
              fetch("/signin",{
                  method:"post",
                  headers:{
                      "Content-Type":"application/json"
                  },
                  body:JSON.stringify({
                      name,
                      password
                  })
              }).then(res=>res.json())
              .then(data=>{
                    setLoading(false)
                  if(data.error){
                      M.toast({html:data.error, classes:"#c62828 red darken-3"})
                  }
                  else{
                      localStorage.setItem("jwt",data.token)
                      dispatch({type:"USER",payload:data.token})
                      M.toast({html: "Signed In Successully", classes:"#43a047 green darken-1"})
                      history.push('/dashboard')
                  }
              }).catch(error=>{
                  console.log(error)
              })
          }
>>>>>>> e0b20e839b215e515f5658f03baa7dcee4a8e288
    return (
        <div className="card row" style={{ height: 'auto', width: '60vmin', maxWidth: '500px', textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <div className="signin grey-text text-darken-1" style={{ fontSize: '5vmin', margin: '2vmin', marginBottom: '0' }}>Sign In</div>
            <div className='input-field col s12'>
                <input
                    className='validate'
                    placeholder='Name'
                    id='name'
                    type="text"
                    value={name}
                    autoComplete='off'
                    required
                    onChange={(e) => { setName(e.target.value) }}
                    style={{ height: '6vmin' }}
                />
            </div>
            <div className='input-field col s12'>
                <input
                    className='validate'
                    placeholder='Password'
                    id='password'
                    type="password"
                    value={password}
                    autoComplete='off'
                    required
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    style={{ height: '6vmin' }}
                />
            </div>
            <div className='input-field col s12'>
                <button style={{ width: '40%', height:'6vmin', lineHeight:'6vmin', borderRadius:'0.5vmin', fontSize:'2.5vmin' }}
                    className={loading ? 'waves-effect waves-light btn large-btn disabled' : 'waves-effect waves-light btn large-btn'}
                    onClick={() => signInUser()}>Sign IN
                </button>
            </div>
        </div>
    );
}

export default SignIn;