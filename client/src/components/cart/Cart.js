import React, {useEffect, useContext} from 'react';
import '../../styles/CartStyles/Cart.css'
import { CartContext } from '../../context/cartContext';
import CartPoduct from './CartProduct'

function Cart() {
  const {cart, setCart, setProductQuantity, handleClearCart} = useContext(CartContext)

  const displayCartItems = cart?.cart_products?.map(cartProduct => {
    return <CartPoduct key={cartProduct.id} cartProduct={cartProduct} />
  })

  useEffect(() => {
    fetch("/carts/my-cart").then((r) => {
      // console.log(r)
      if (r.ok) {
        r.json().then((cart) => {
          setCart(cart)
          setProductQuantity(productQuantity => productQuantity + 1)
        });
      }
    });
  }, [setCart, setProductQuantity]);

  function checkout() {
    fetch('/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => {
      if (r.ok) {
        r.json().then(sessionUrl => window.location.replace(sessionUrl.session_url))

      }
    })
    // .then(r => r.json())
    // .then(sessionUrl => window.location.replace(sessionUrl.session_url))
  }

  function clearCart() {
    fetch('/cart/clear', { method: 'DELETE' })
    .then(response => response.json())
    .then(data => {
      console.log(data.message); // Log the success message
      handleClearCart(); // Clear the cart in the frontend state as well
    })
    .catch((error) => {
      console.error('Error:', error);
    });
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
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
