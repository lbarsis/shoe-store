import React from 'react';
import '../styles/HomeStyles/HomeBanner.css'
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="banner">
      <div className="bubble-container">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <div className="banner-content">
        <h1>Welcome to Our Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {/* <a href="#" className="button">Learn More</a> */}
        <NavLink to='/about' className='button'>Learn More</NavLink>
      </div>
    </div>
  );
}

export default Home;
