import { createContext, useState, useEffect } from "react";

const ProductContext = createContext(null)

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/products").then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products));
      } 
    });
  }, []);

 
  return (
    <ProductContext.Provider value={ {products, setProducts}}>
      {children}
    </ProductContext.Provider>
  )

}

export { ProductContext, ProductProvider };