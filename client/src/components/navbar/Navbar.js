import React from 'react';
import { NavLink } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import '../../styles/NavbarStyles/Navbar.css'

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/add-product'>Add Product</NavLink>
        <DropdownMenu />
      </nav>
    </div>
  );
}

export default Navbar;