import React, {useContext} from 'react';
import { ProductContext } from '../../context/productContext';
import ProductCard from './ProductCard';
import ProductSideScroll from './ProductSideScroll';
import '../../styles/ShopStyles/GridStyles.css'

function Shop() {
  const { products } = useContext(ProductContext)

  const displayProducts = products.map(product => {
    return <ProductCard key={product.sku} product={product} />
  })

  return (
    <div className='grid-container'>
      {displayProducts}
    </div>
  );
}

export default Shop;
