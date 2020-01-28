import React from 'react';
import './App.css';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [
        {
          qty: 10,
          price: 8999,
          title: 'Mobile phone',
          img: 'https://www.91-img.com/pictures/132721-v10-vivo-v15-pro-mobile-phone-large-1.jpg?tr=h-330,q-75',
          id: 1
        },
        {
          qty: 1,
          price: 77777,
          title: 'Washing Machine',
          img: 'https://images-na.ssl-images-amazon.com/images/I/81HApTZ8D8L._SL1500_.jpg',
          id: 2
        },
        {
          qty: 4,
          price: 999,
          title: 'Watch',
          img: 'https://staticimg.titan.co.in/Titan/Catalog/1806SL03_1.jpg?pView=pdp',
          id: 3
        }
      ]
    }
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
