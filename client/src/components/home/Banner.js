import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/HomeStyles/HomeBanner.css'

function Banner() {
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
        <h1>Welcome to Steppers</h1>
        <p>
          Why don't shoes ever admit they're tired?

          Because they're afraid they'll get the boot!
        </p>
        {/* <a href="#" className="button">Learn More</a> */}
        <NavLink to='/about' className='button'>Learn More</NavLink>
      </div>
    </div>
  );
}

export default Banner;
