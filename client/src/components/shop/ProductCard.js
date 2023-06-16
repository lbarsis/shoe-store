import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { ErrorsContext } from '../../context/errorsContext';
import { ProductContext } from '../../context/productContext';
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const { errors, setErrors } = useContext(ErrorsContext)
  const { handleDeleteProduct } = useContext(ProductContext)
  const { cart, handleAddCartItem, handleUpdateCartItem, handleRemoveCartItem } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(0);

  useEffect(() => {
    const foundProduct = cart.cart_products?.find(
      (cartProduct) => cartProduct?.product?.id === product.id
    );
    if (foundProduct) {
      setProductQuantity(foundProduct.quantity);
    } else {
      setProductQuantity(0);
    }
  }, [cart, product.id]);

  function addItemToCart() {
    fetch('/cart_products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cart_product: {
          quantity: 1,
          product_id: product.id,
        },
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((addedProduct) => {
          handleAddCartItem(addedProduct)
          setErrors(null)
        });
      } else {
        r.json().then(err => {
          setErrors(err)
        })
      }
    });
  }

  function subtractItemFromCart() {
    const foundProduct = cart.cart_products.find(
      (cartProduct) => cartProduct.product.id === product.id
    );

    if (foundProduct) {
      fetch(`/cart_products/${foundProduct.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cart_product: {
            quantity: foundProduct.quantity - 1,
          },
        }),
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((updatedProduct) => {
              handleUpdateCartItem(updatedProduct);
              setErrors(null);
            });
          } else {
            r.json().then(err => {
              setErrors(err);
            });
          }
        });
    }
  }

  function deleteProduct() {
    fetch(`/products/${product.id}`, {
      method: 'DELETE'
    })
      .then(r => {
        if (r.ok) {
          r.json().then(() => handleDeleteProduct(product))
        } else {
          r.json().then(error => console.log(error))
        }
      })
  }

  return (
    <div className="card">
      <img src={product.image_url} alt="Product" className="card-image" onClick={() => console.log(product.id)} />
      <div className="card-content">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">
          {product.description}
        </p>
        <h4>${product.price / 100}.00</h4>
        <p>Brand: {product.brand}</p>
        <p>Current Stock: {product.inventory_qty}</p>
        <p>P/N: {product.sku}</p>
        <button onClick={addItemToCart} className="card-button">
          Add to Cart
        </button>
        <div className="button-bar">
          <button onClick={subtractItemFromCart} className="qty-adjust-button minus">-</button>
          <p className="qty-count">{productQuantity}</p>
          <button onClick={addItemToCart} className="qty-adjust-button plus">+</button>
          <Link to={`/edit-product/${product.id}`} className='edit-button'>Edit Product</Link>
          <button onClick={deleteProduct} className='delete-button'>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;