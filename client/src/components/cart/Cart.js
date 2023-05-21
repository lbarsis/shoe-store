import React, {useContext} from 'react';
import '../../styles/CartStyles/Cart.css'
import { CartContext } from '../../context/cartContext';
import CartPoduct from './CartProduct'
// import { UserContext } from '../../context/userContext';

function Cart() {
  const {cart} = useContext(CartContext)

  const displayCartItems = cart?.cart_products?.map(cartProduct => {
    return <CartPoduct key={cartProduct.sku} cartProduct={cartProduct} />
  })

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
        <p>Total Items: ??</p>
        <p>Total Price: ??</p>
      </div>
    </div>
  );
}

export default Cart;
