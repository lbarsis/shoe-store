import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login'
import { UserProvider } from './context/userContext';
import { ErrorsProvider } from './context/errorsContext';
import Shop from './components/shop/Shop';
import Sale from './components/sale/Sale';
import About from './components/about/About';
import Contact from './components/contact/Contact';


function App() {

  return (
    <div className="App">
      <ErrorsProvider>
          <UserProvider>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/sale' element={<Sale />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
          </UserProvider>
      </ErrorsProvider>
    </div>
  );
}

export default App;