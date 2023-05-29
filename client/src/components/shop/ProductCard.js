import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { ErrorsContext } from '../../context/errorsContext';

function ProductCard({ product }) {
  const { errors, setErrors } = useContext(ErrorsContext)
  const { cart, handleAddCartItem, handleUpdateCartItem } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(0);

  // console.log(cart)

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
          // setErrors(null)
        });
      } else {
        r.json().then(err => {
          setErrors(err)
        })
      }
    });
  }

  function removeItemFromCart() {
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
              // Update local state to reflect changes
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

  return (
    <div className="card">
      <img src={product.image_url} alt="Poduct" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          accumsan commodo orci vel tincidunt. Sed venenatis velit ut massa
          iaculis, a dictum ipsum finibus. Duis auctor enim in elementum
          suscipit.
        </p>
        <button onClick={addItemToCart} className="card-button">
          Add to Cart
        </button>
        <div className="button-bar">
          <button onClick={removeItemFromCart} className="qty-adjust-button">-</button>
          <p className="qty-count">{productQuantity}</p>
          <button className="qty-adjust-button">+</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;