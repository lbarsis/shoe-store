import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { UserContext } from '../../context/userContext';

function ProductCard({ product }) {
  const { user } = useContext(UserContext)
  const { cartProducts } = useContext(CartContext)
  console.log(user)

  return (
    <div className="card">
      <img src={product.image_url} alt="Poduct" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan commodo orci vel tincidunt. Sed venenatis velit ut massa iaculis, a dictum ipsum finibus. Duis auctor enim in elementum suscipit. </p>
        <button className="card-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
