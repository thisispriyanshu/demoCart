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
      render(){
          const {products}=this.state
          console.log(products)
          return(
              <div className="cart">
                  {products.map((product)=>{
         return <CartList product={product} key={product.id}/>
                  })}
        </div>
          )
      }
}

export default Cart;