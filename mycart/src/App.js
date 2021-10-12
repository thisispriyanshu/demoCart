import React from 'react';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import {initializeApp} from 'firebase/app'
import { getFirestore,collection,getDocs,getDoc } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBm4NhK8Bujqe1QsRbTAUgBvtu0ucksAVE",
  authDomain: "fir-cart-3a52d.firebaseapp.com",
  projectId: "fir-cart-3a52d",
  storageBucket: "fir-cart-3a52d.appspot.com",
  messagingSenderId: "75430461284",
  appId: "1:75430461284:web:bdd8cedb589bedbdd60471",
  measurementId: "G-Z613QSQ4EN"
};

const app=initializeApp(firebaseConfig)
const db = getFirestore(app)


class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[]
  };
  }
  
  componentDidMount(){
       const productsCol = collection(db,'products')
        db.collection('products'.getDocs())
const snapshot = await getDocs(productsCol) 

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
