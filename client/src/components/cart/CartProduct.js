import React from 'react';

function CartProduct({cartProduct}) {
  // console.log(cartProduct)
  return (
    <li>
      <img src={cartProduct.product?.image_url} alt='example' />
      <h3>{cartProduct.product?.name}</h3>
      <p>Price: ${cartProduct.product?.price}</p>
      <p>Quantity: {cartProduct.quantity}</p>
    </li>
  );
}

export default CartProduct;
