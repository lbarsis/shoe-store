import React, {useContext} from 'react';
import { CartContext } from '../../context/cartContext';
import { ErrorsContext } from '../../context/errorsContext';

function CartProduct({cartProduct}) {
  const {setCart, handleRemoveCartItem} = useContext(CartContext)
  const { errors, setErrors } = useContext(ErrorsContext)
  
  function removeItemFromCart() {
    fetch(`/cart_products/${cartProduct.id}`, {
      method: 'DELETE',
    })
      .then((r) => {
        if (r.ok) {
          handleRemoveCartItem(cartProduct.id);
        } else {
          r.json().then(err => {
            setErrors(err)
          })
        }
      });
  }

  return (
    <li key={cartProduct.id}>
      <img src={cartProduct.product?.image_url} alt='example' />
      <h3>{cartProduct.product?.name}</h3>
      <p>Price: ${cartProduct.product?.price/100}</p>
      <p>Quantity: {cartProduct.quantity}</p>
      <button onClick={removeItemFromCart}>Remove</button>
    </li>
  );
}

export default CartProduct;
