import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { UserContext } from '../../context/userContext';

function ProductCard({ product }) {
  const { user } = useContext(UserContext)
  const { cartProducts } = useContext(CartContext)

  function addItemToCart() {
    fetch('/cart_products', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        cart_product: {
          quantity: 1,
          product_id: product.id,
        }
      })
    })
    .then(r => {
      if (r.ok) {
        r.json().then(addedProduct => console.log(addedProduct))
      }
    })
  }

  return (
    <div className="card">
      <img src={product.image_url} alt="Poduct" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan commodo orci vel tincidunt. Sed venenatis velit ut massa iaculis, a dictum ipsum finibus. Duis auctor enim in elementum suscipit. </p>
        <button onClick={addItemToCart} className="card-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
