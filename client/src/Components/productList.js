import {useEffect, useState} from 'react'
import {Link} from 'react-dom'

const ProductList = () =>{
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('/products',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }

        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result)
        })

    },[])
    return(

        <div className="container" style={{zIndex:'-99'}}>
          <div className="row">
              {
                 data.map(item=>{
                 return(


                      <div className="col m6" style={{padding:"1px 20px 1px"}}>
                        <div className="card">
                          <div className="card-image">
                          </div>
                          <div className="card-content">
                            <h4>
                              {item.modelName}
                            </h4>
                            <p>
                              {item.price}
                            </p>
                            <p>
                              {item.companyName}
                            </p>
                          </div>
                          <div className="card-action">
                          </div>
                        </div>
                      </div>
                 )
                })
              }
              </div>

        </div>
    )
}

export default ProductList;