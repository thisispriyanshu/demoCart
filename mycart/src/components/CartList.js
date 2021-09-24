import React from 'react';
import "./CartList.css"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

class CartList extends React.Component { 
    constructor(props){
      super(props);
      this.state={
          item : "Laptop",
          imgUrl : "http://www.clipartbest.com/cliparts/RcG/EkX/RcGEkXeRi.png",
          quantity: 1,
          price : 400,
          show : true,
          min: 0,
      };
    }
    IncrementItem=()=>{
        this.setState(prevState=>{
            if(prevState.quantity >-1){
                return{
                    quantity: prevState.quantity +1,
                    price : prevState.price + 400,
                }
            }else{
                return null;
            }
        })
    }
    DecrementItem=()=>{
        this.setState(prevState=>{
            if(prevState.quantity >0){
                return{
                    quantity: prevState.quantity -1,
                    price : prevState.price - 400,
                }
            }else{
                return null;
            }
        })
    }
    DeleteItem=()=>{
        this.setState(prevState=>{
            if(prevState.quantity >0){
                return{
                    quantity: 0,
                    price : 0,
                }
            }else{
                return null;
            }
        })
    }
      render(){
    return (
       <div className="cart-item">
           <div className=".left-block">
               <img src="http://www.clipartbest.com/cliparts/RcG/EkX/RcGEkXeRi.png" alt="" style={{height:110,width:120,padding:10}}></img>
           </div>
           <div className=".right-block">
               <h3>Laptop</h3>
               <p>Rs. 899</p>
               <p>1</p>
               <div className="cart-item-actions">
                   <AddIcon/>
                   <RemoveIcon/>
                   <DeleteIcon/>
               </div>
           </div> 
       </div>
       
    );
      }
}

export default CartList;