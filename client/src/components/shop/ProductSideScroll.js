import React, { useContext } from 'react';
import '../../styles/ShopStyles/SideScroll.css'
import { ProductContext } from '../../context/productContext';
import ProductCard from './ProductCard';

function ProductSideScroll() {
  const { products } = useContext(ProductContext)

  const displayProducts = products?.map(product => {
    return <ProductCard key={product.id} product={product} />
  })

  return (
    <div>
      <h1>Sale</h1>
      <div className="card-slider-container">
        <div className="card-slider">
          {displayProducts}
        </div>
      </div>
    </div>
  );
}

export default ProductSideScroll;
