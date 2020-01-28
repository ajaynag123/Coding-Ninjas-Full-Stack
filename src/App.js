import React from 'react';
import './App.css';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount () {
    firebase
      .firestore()
      .collection('products')
      .onSnapshot(snapshot => {
    
        const products = snapshot.docs.map((doc) => {
          const data  = doc.data();

          data['id'] = doc.id;
          return data;
        });

        this.setState({
          products
        });
      })
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    });
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      products
    });
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((product) => product.id !== id);

    this.setState({
      products: items
    });
  }

  getcountOfCartItems = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  render (){
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getcountOfCartItems()} />
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
      </div>
    );
  }
}

export default App;
