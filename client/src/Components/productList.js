import {useEffect, useState} from 'react'

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

        <div className="container" style={{display:'grid'}}>
              {
                 data.map(item=>{
                 return(
                    
      
                    <div className="row">
                      <div className="col L3" style={{padding:"1px"}}>
                        <div className="card">
                          <div className="card-image">
                            <img src="image.jpg" />
                            
                          </div>
                          <div className="card-content">
                            <h4>
                              {item.modalName}
                            </h4>
                            <p>
                              {item.Price}
                            </p>
                            <p>
                              {item.companyName}
                            </p>
                          </div>
                          <div className="card-action">
                            <a href="#">This is a link</a>
                          </div>
                        </div>
                      </div>
                      </div>
                 )
              })
            }

        </div>
    )
}

export default ProductList;