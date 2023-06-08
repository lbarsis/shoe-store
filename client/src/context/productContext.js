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

  function handleUpdateProduct(updatedProduct) {
    const updatedProducts = products.map(product => {
      if (product.id === updatedProduct.id) {
        return updatedProduct
      } else {
        return product
      }
    })
    setProducts(updatedProducts)
  }

  function handleDeleteProduct(deletedProduct) {
    const displayProducts = products.filter(product => product.id !== deletedProduct.id)
    setProducts(displayProducts)
  }
 
  return (
    <ProductContext.Provider value={ {products, setProducts, handleAddProduct, handleDeleteProduct, handleUpdateProduct}}>
      {children}
    </ProductContext.Provider>
  )

}

export { ProductContext, ProductProvider };