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
        <NavLink to='/sale'>Sale</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <DropdownMenu />
      </nav>
    </div>
  );
}

export default Navbar;