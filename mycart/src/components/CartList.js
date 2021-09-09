import React from 'react';
import "./CartList.css"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

class CartList extends React.Component { 
    constructor(props){
      super(props);
      this.state={
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
    ToggleClick = () => {
        this.setState({
          show: !this.state.show
        });
      }
      handleChange = (event) => {
        this.setState({quantity: event.target.value});
      }
      render(){
    return (
        <div className="cartlist">
            <div className="cart-item">
                <div className="cart-item-image">
                    <img src="http://www.clipartbest.com/cliparts/RcG/EkX/RcGEkXeRi.png"/>
                </div>
                <div className="cart-item-text">
                    Laptop
                </div>
                <div className="cart-item-button">
                   <AddIcon onClick={this.IncrementItem}/>
                   <RemoveIcon onClick={this.DecrementItem}/>
                   <DeleteIcon onClick={this.DeleteItem}/>
                </div>
                <div className="cart-item-descr">
                    <input value={this.state.quantity} onChange={this.handleChange} ></input>
                    <input value={this.state.price} onChange={this.handleChange}></input>
                </div>
            </div>
            <div className="cart-item">
                <div className="cart-item-image">
                    <img src="http://www.clipartbest.com/cliparts/RcG/EkX/RcGEkXeRi.png"/>
                </div>
                <div className="cart-item-text">
                    Laptop
                </div>
                <div className="cart-item-button">
                <AddIcon onClick={this.IncrementItem}/>
                   <RemoveIcon onClick={this.DecrementItem}/>
                   <DeleteIcon onClick={this.DeleteItem}/>
                </div>
                <div className="cart-item-descr">
                <input value={this.state.quantity} onChange={this.handleChange} ></input>
                    <input value={this.state.price} onChange={this.handleChange}></input>
                </div>
            </div>
        </div>
    );
      }
}

export default CartList;