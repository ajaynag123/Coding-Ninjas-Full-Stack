import React from 'react';

class CartItem extends React.Component {
  constructor () {
    super();
    this.state = {
      qty: 1,
      price: 8999,
      title: 'Mobile phone',
      img: ''
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  increaseQuantity = () => {
    console.log(this);
  }

  render () {
    const { qty, price, title } = this.state;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={{ height: 110, width: 110, borderRadius: 5, background: '#ccc' }} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}> {title} </div>
          <div style={{ color: '#777' }}>{price}</div>
          <div style={{ color: '#777' }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img 
              alt="add"
              src="https://image.flaticon.com/icons/svg/1665/1665578.svg"
              className="action-icons"
              onClick={this.increaseQuantity}
            />
            <img alt="minus" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" className="action-icons" />
            <img alt="delete" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" className="action-icons" />
          </div>
        </div>
      </div>
    )
  }
}

export default CartItem;