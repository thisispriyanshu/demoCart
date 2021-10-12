import React from 'react';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import firebase from './firebase'
import {getFirestore } from 'firebase/firestore';
const db= getFirestore(firebase)
class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[]
  };
  }
  
  componentDidMount(){
      db
       .collections()
       .get(()=>{
         console.log("hello")
       })

  }
  handleIncreaseQuantity = (product) =>{
      // console.log("hey its is increasing ", product);
      const { products}=this.state
      const index= products.indexOf(product);
      products[index].quantity+=1
      products[index].price+=products[index].fixedPrice
      this.setState({
          products:products
      })
  }
  handleDecreaseQuantity = (product) =>{
      // console.log("hey its is increasing ", product);
      const { products}=this.state
      const index= products.indexOf(product);
      if(products[index].quantity>0){
      products[index].quantity-=1
      products[index].price-=products[index].fixedPrice
      }
      this.setState({
          products:products
      })
  }
  handleDeleteQuantity=(product)=>{
      const { products}=this.state
      const index= products.indexOf(product);
      products.splice(index,1);
      this.setState({
          products:products
      })
  }

  totalQuantity=()=>{
    const {products}=this.state
    let totalQty=0;
    products.forEach((product)=>{
        totalQty+=product.quantity
    })
    return totalQty
  }

  totalPrice=()=>{
    const {products}=this.state
    let total=0;
    products.forEach((product)=>{
        total+=product.price
    })
    return total
  }

  render(){
  const {products}= this.state
  return (
    <div className="app">            
      <Header totalQty={this.totalQuantity()} />
      <Cart products={products} onIncreaseQuantity={this.handleIncreaseQuantity} onDecreaseQuantity={this.handleDecreaseQuantity} onDeleteQuantity={this.handleDeleteQuantity} />
      <Footer total={this.totalPrice()}/>
    </div>
  );
}
}

export default App;
