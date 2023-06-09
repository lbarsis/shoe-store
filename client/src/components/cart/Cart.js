import React, {useContext} from 'react';
import '../../styles/CartStyles/Cart.css'
import { CartContext } from '../../context/cartContext';
import CartPoduct from './CartProduct'

function Cart() {
  const {cart, setCart, handleRemoveCartItem} = useContext(CartContext)

  const displayCartItems = cart?.cart_products?.map(cartProduct => {
    return <CartPoduct key={cartProduct.id} cartProduct={cartProduct} />
  })

  function checkout() {
    fetch('/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(sessionUrl => window.location.replace(sessionUrl.session_url))
  }
 
  return (
    <div>
      <div className="cart-items">
        <h2>Items in Cart</h2>
        <ul>
          {displayCartItems}
        </ul>
      </div>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Items: {cart.cart_total_items}</p>
        <p>Total Price: {cart.cart_total_price}</p>
      </div>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default Cart;
