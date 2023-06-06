import { createContext, useState, useEffect } from "react";

const ProductContext = createContext(null)

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/products").then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products));
      } 
    });
  }, []);

  function handleAddProduct(newProduct) {
    setProducts([
      ...products,
      newProduct
    ])
  }

  function handleDeleteProduct(deletedProduct) {
    const displayProducts = products.filter(product => product.id !== deletedProduct.id)
    setProducts(displayProducts)
  }
 
  return (
    <ProductContext.Provider value={ {products, setProducts, handleAddProduct, handleDeleteProduct}}>
      {children}
    </ProductContext.Provider>
  )

}

export { ProductContext, ProductProvider };