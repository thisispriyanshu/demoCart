import React from 'react';
import "./CartList.css"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

class CartList extends React.Component { 
    IncrementItem=()=>{
        this.setState(prevState=>{
            if(prevState.quantity >-1){
                return{
                     quantity: prevState.quantity +1,
                    price : prevState.price + 4999,
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
                    price : prevState.price - 4999,
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
          const {price,quantity,title,imgUrl}=this.props.product;
          const {onIncreaseQuantity,onDecreaseQuantity,onDeleteQuantity}=this.props
    return (
       <div className="cart-item">
           <div className="left-block">
               <img src={imgUrl}></img>
           </div>
           <div className="right-block">
               <h3>{title}</h3>
               <p>Rs. {price}</p>
               <p>{quantity}</p>
               <div className="cart-item-actions">
                   <AddIcon className="actions-icons" onClick= {()=>onIncreaseQuantity(this.props.product)}/>
                   <RemoveIcon className="actions-icons" onClick={()=>onDecreaseQuantity(this.props.product)}/>
                   <DeleteIcon className="actions-icons" onClick={()=>onDeleteQuantity(this.props.product)}/>
               </div>
           </div> 
       </div>
       
    );
      }
}

export default CartList;