import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../styles/NavbarStyles/DropdownMenu.css';

function DropdownMenu() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };


  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE'
    })

    setUser(null)
    navigate('/')
  }

  return (
    <div className="dropdown-menu">
      <div className="dropdown-toggle" onClick={handleMenuToggle}>
        <NavLink to="#" className="active-link">Account</NavLink>
      </div>
      {isOpen && !user && (
        <ul className="dropdown-menu-items">
          <li onClick={handleMenuToggle}>
            <NavLink to='/login' className="active-link">Login</NavLink>
          </li>
          <li onClick={handleMenuToggle}>
            <NavLink to='/signup' className="active-link">Signup</NavLink>
          </li>
        </ul>
      )}

      {isOpen && user && (
        <ul className="dropdown-menu-items">
          <li onClick={handleMenuToggle}>
            <NavLink to='/cart' className="active-link">Cart</NavLink>
          </li>
          <li onClick={handleMenuToggle}>
            <NavLink to='/orders' className="active-link">Orders</NavLink>
          </li>
          <li onClick={handleMenuToggle}>
            <button onClick={handleLogout} className='logout-button'>Logout</button>
          </li>
        </ul>
      )}

    </div>
  );
}

export default DropdownMenu;
