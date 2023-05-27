import { createContext, useState, useEffect } from "react";
// import {UserContext} from './userContext'

const CartContext = createContext(null)

const CartProvider = ({ children }) => {
  // const {user} = useContext(UserContext)
  const [cart, setCart] = useState({ cart_products: [] });
  const [productQuantity, setProductQuantity] = useState(0);

  useEffect(() => {
    fetch("/my-cart").then((r) => {
      // console.log(r)
      if (r.ok) {
        r.json().then((cart) => {
          setCart(cart)
          setProductQuantity(productQuantity => productQuantity + 1)
        });
      }
    });
  }, []);

  console.log(cart)

  // function handleAddCartItem (addedItem) {
  //   setCart({
  //     ...cart,
  //     cart_products: [...cart.cart_products, addedItem]
  //   })
  // }

  function handleAddCartItem(addedItem) {
    setCart((prevCart) => {
      const existingProducts = prevCart.cart_products;
      const isProductInCart = existingProducts.some(
        (cartProduct) => cartProduct.product.id === addedItem.product.id
      );

      if (!isProductInCart) {
        return {
          ...prevCart,
          cart_products: [...existingProducts, addedItem],
          cart_total_price: prevCart.cart_total_price + addedItem.product.price/100,
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
          cart_total_price: prevCart.cart_total_price + addedItem.product.price/100,
          cart_total_items: prevCart.cart_total_items + 1
        };
      }
    });
  }



  return (
    <CartContext.Provider value={{ cart, setCart, handleAddCartItem, productQuantity, setProductQuantity }}>
      {children}
    </CartContext.Provider>
  )

}

export { CartContext, CartProvider };
