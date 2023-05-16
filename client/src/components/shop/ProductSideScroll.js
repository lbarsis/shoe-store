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
    <div className="card-slider-container">
      <div className="card-slider">
        {displayProducts}
      </div>
    </div>
  );
}

export default ProductSideScroll;
