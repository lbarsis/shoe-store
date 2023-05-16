import React from 'react';

function ProductCard({ product }) {
  console.log(product)
  return (
    <div className="card">
      <img src={product.image_url} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Card 1</h2>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan commodo orci vel tincidunt. Sed venenatis velit ut massa iaculis, a dictum ipsum finibus. Duis auctor enim in elementum suscipit. </p>
        <a href="#" className="card-button">Learn More</a>
      </div>
    </div>
  );
}

export default ProductCard;
