import React from 'react';
import '../../styles/CartStyles/Cart.css'
// import { UserContext } from '../../context/userContext';

function Cart() {
  // const {user} = useContext(UserContext)

  return (
    <div>
      <div className="cart-items">
        <h2>Items in Cart</h2>
        <ul>
          <li>
            <img src='example.jpg' alt='example'/>
              <h3>Item name</h3>
              <p>Item Price</p>
              <p>Item Quantity</p>
          </li>
        </ul>
      </div>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Items: ??</p>
        <p>Total Price: ??</p>
      </div>
    </div>
  );
}

export default Cart;
