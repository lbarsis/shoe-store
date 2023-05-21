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
          // setProductQuantity(productQuantity => productQuantity + 1)
        });
      } 
    });
  }, []);

  function handleAddCartItem (addedItem) {
    setCart({
      ...cart,
      cart_products: [...cart.cart_products, addedItem]
    })
  }

  return (
    <CartContext.Provider value={ {cart, setCart, handleAddCartItem, productQuantity, setProductQuantity} }>
      {children}
    </CartContext.Provider>
  )

}

export {CartContext, CartProvider};
