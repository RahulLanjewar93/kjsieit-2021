import React, { Component } from "react";

import { rowData } from "./appData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    Alldata: rowData,
    id: "",
    title: "",
    company: "",
    updateEdit: [],
  };
  getRecord = (id) => {
    const product = this.state.Alldata.find((item) => item.id === id);
    return product;
  };
  onEdit = (id) => {
    const tempProduct = this.state.Alldata;
    const index = tempProduct.indexOf(this.getRecord(id));
    const selectedRecord = tempProduct[index];
    this.setState({
      id: selectedRecord["id"],
      title: selectedRecord["title"],
      price: selectedRecord["price"],
      company:selectedRecord['company']
    })
  }
  updateValue=(e,test)=>{
      if(test==="title"){
          this.state.title=e.target.value;
      }
      if(test==="company"){
        this.state.company=e.target.value;
    }
    if(test==="price"){
        this.state.price=e.target.value;
    }
    const tempArray=[this.state.id,this.state.title,this.state.company,this.state.price];
    this.setState({
        updateEdit: tempArray
    })

  }
  onSave=(id)=>{
      if(id!==''){
          const savedRecord= this.state.Alldata;
          const index= savedRecord.indexOf(this.getRecord(id));
          const Record = savedRecord[index];
          Record['title']=this.state.updateEdit[1];
          Record['company']=this.state.updateEdit[2];
          Record['price']=this.state.updateEdit[3];
          this.setState({
              Alldata:[...this.state.Alldata],
              id:"",title:"",price:"",company:""
          })
      }
      else{
          const MaxId=Math.max(...this.state.Alldata.map(item=>item.id));
          const id = MaxId+1;
          const newArray=[];
          newArray['title']=this.state.updateEdit[1];
          newArray['company']=this.state.updateEdit[2];
          newArray['price']=this.state.updateEdit[3];
          this.setState({
            Alldata:[...this.state.Alldata],
            id:"",title:"",price:"",company:""
        })
      }
  }
  onDelete=(id)=>{
      const tempProduct=this.state.Alldata.filter(item=>item.id!==id);
      this.setState({
          Alldata:tempProduct
      })


  }
  render() {
    return (
      <div>
        <ProductContext.Provider value={{ ...this.state,
        onEdit:this.onEdit,
        updateValue:this.updateValue,
        onSave:this.onSave,
        onDelete:this.onDelete
        }}>
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
