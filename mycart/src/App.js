import './App.css';
import CartList from './components/CartList';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
      <CartList/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
