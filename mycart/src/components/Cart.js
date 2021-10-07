import React from 'react';
import "./Cart.css"
import CartList from './CartList';

class Cart extends React.Component { 
    constructor(){
      super();
      this.state={
          products:[
          {
              id:1,
          title:"Laptop",
          imgUrl : "http://www.clipartbest.com/cliparts/RcG/EkX/RcGEkXeRi.png",
          quantity: 1,
          price : 4999,
          isLoggedin : true,
         },
         {
             id:2,
            title:"Watch",
          imgUrl : "http://www.clipartbest.com/cliparts/RcG/EkX/RcGEkXeRi.png",
          quantity: 1,
          price : 499,
          isLoggedin : true,  
         }
        ]
    };
    }
    handleIncreaseQuantity = (product) =>{
        console.log("hey its is increasing ", product);
        const { products}=this.state
        const index= products.indexOf(product);
        products[index].quantity+=1
        products[index].price+=4999
        this.setState({
            products:products
        })
    }
    handleDecreaseQuantity = (product) =>{
        console.log("hey its is increasing ", product);
        const { products}=this.state
        const index= products.indexOf(product);
        products[index].quantity-=1
        products[index].price-=4999
        this.setState({
            products:products
        })
    }
      render(){
          const {products}=this.state
          console.log(products)
          return(
              <div className="cart">
                  {products.map((product)=>{
         return <CartList product={product} key={product.id} onIncreaseQuantity={this.handleIncreaseQuantity }onDecreaseQuantity={this.handleDecreaseQuantity}/>
                  })}
        </div>
          )
      }
}

export default Cart;