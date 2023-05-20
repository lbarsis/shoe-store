import { createContext, useState, useEffect } from "react";
// import UserContext from './userContext'

const CartContext = createContext(null)

const CartProvider = ({ children }) => {
  // const {user} = useContext(UserContext)
  const [cartProducts, setCartProducts] = useState(null);

  useEffect(() => {
    fetch("/users/cart").then((r) => {
      // console.log(r)
      if (r.ok) {
        r.json().then((products) => setCartProducts(products));
      } 
    });
  }, []);


  return (
    <CartContext.Provider value={ {cartProducts, setCartProducts} }>
      {children}
    </CartContext.Provider>
  )

}

export {CartContext, CartProvider};
