import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Signup from './components/navbar/Signup';
import Login from './components/navbar/Login'
import { UserProvider } from './context/userContext';
import { ErrorsProvider } from './context/errorsContext';
import Shop from './components/shop/Shop';
import Sale from './components/sale/Sale';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { ProductProvider } from './context/productContext';
import Cart from './components/cart/Cart';
import { CartProvider } from './context/cartContext';
import AddProduct from './components/admin/AddProduct';
import EditProduct from './components/admin/EditProduct';
import Orders from './components/orders/Orders';
import { OrdersProvider } from './context/ordersContext';
// import Footer from './components/footer/Footer';


function App() {

  return (
    <div className="App">
      <ErrorsProvider>
        <UserProvider>
          <OrdersProvider>
            <CartProvider>
              <ProductProvider>
                <Navbar />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/shop' element={<Shop />} />
                  <Route path='/my-orders' element={<Orders />} />
                  <Route path='/add-product' element={<AddProduct />} />
                  <Route path='/edit-product/:productId' element={<EditProduct />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                {/* <Footer /> */}
              </ProductProvider>
            </CartProvider>
          </OrdersProvider>
        </UserProvider>
      </ErrorsProvider>
    </div>
  );
}

export default App;