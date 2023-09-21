import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import '../../styles/NavbarStyles/Navbar.css'
import { UserContext } from '../../context/userContext';

function Navbar() {
  const {user} = useContext(UserContext)
  // console.log(user)
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        { user?.is_admin ? <NavLink to='/add-product'>Add Product</NavLink> : null }
        <DropdownMenu />
      </nav>
    </div>
  );
}

export default Navbar;