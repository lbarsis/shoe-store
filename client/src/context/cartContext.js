import { createContext, useState, useEffect } from "react";
// import {UserContext} from './userContext'

const CartContext = createContext(null)

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);

  useEffect(() => {
    fetch("/carts/my-cart").then((r) => {
      // console.log(r)
      if (r.ok) {
        r.json().then((cart) => {
          setCart(cart)
          setProductQuantity(productQuantity => productQuantity + 1)
        });
      }
    });
  }, []);

  function handleAddCartItem(addedItem) {
    setCart((prevCart) => {
      const existingProducts = prevCart.cart_products;
      const isProductInCart = existingProducts?.some(
        (cartProduct) => cartProduct.product.id === addedItem.product.id
      );

      if (!isProductInCart) {
        return {
          ...prevCart,
          cart_products: [...existingProducts, addedItem],
          cart_total_price: prevCart.cart_total_price + addedItem.product.price / 100,
          cart_total_items: prevCart.cart_total_items + 1
        };
      } else {
        const updatedProducts = existingProducts.map((cartProduct) => {
          if (cartProduct.product.id === addedItem.product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + 1
            };
          }
          return cartProduct;
        });

        return {
          ...prevCart,
          cart_products: updatedProducts,
          cart_total_price: prevCart.cart_total_price + addedItem.product.price / 100,
          cart_total_items: prevCart.cart_total_items + 1
        };
      }
    });
  }

  function handleUpdateCartItem(updatedProduct) {
    const updatedProducts = cart.cart_products.map(product => {
      if (product.id === updatedProduct.id) {
        return updatedProduct
      } else {
        return product
      }
    })

    const totalItems = updatedProducts.reduce(
      (total, product) => total + product.quantity,
      0
    );

    const totalPrice = updatedProducts.reduce(
      (total, product) => total + product.product.price * product.quantity,
      0
    );

    // console.log(totalItems)
    // if (updatedProduct.quantity === 0) {
    //   return handleRemoveCartItem(updatedProduct.id)
    // } 

    setCart((prevCart) => {
      return {
        ...prevCart,
        cart_products: updatedProducts,
        cart_total_price: totalPrice / 100,
        cart_total_items: totalItems
      };
    });
  }

  function handleRemoveCartItem(productId) {
    const cartItems = cart.cart_products.filter(product => product.id !== productId)

    const totalItems = cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    );

    const totalPrice = cartItems.reduce(
      (total, product) => total + product.product.price * product.quantity,
      0
    );

    setCart({
      ...cart,
      cart_products: cartItems,
      cart_total_price: totalPrice / 100,
      cart_total_items: totalItems
    })
  }

  return (
    <CartContext.Provider value={{ cart, setCart, handleAddCartItem, handleUpdateCartItem, productQuantity, setProductQuantity, handleRemoveCartItem }}>
      {children}
    </CartContext.Provider>
  )

}

export { CartContext, CartProvider };
