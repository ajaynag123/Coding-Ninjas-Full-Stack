import React from 'react';

class CartItem extends React.Component {
  constructor () {
    super();
    this.state = {
      qty: 1,
      img: '',
      price: 8999,
      title: 'Mobile Phone'
    }
  }

  render () {
    const { qty, price, title } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={{ height: 110, width: 110, borderRadius: 5, background: '#ccc' }} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: '#777' }}>Rs {price}</div>
          <div style={{ color: '#777' }}>Qty: {qty}</div>
          
          <div className="cart-item-actions">
            {/* Buttons */}
            <img className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665578.svg" alt="add" />
            <img className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" alt="minus"  />
            <img className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" alt="delete" />
          </div>
        </div>
      </div>
    )
  }
}

export default CartItem;