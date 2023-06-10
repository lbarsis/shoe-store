import React from 'react';
import '../../styles/HomeStyles/Cards.css'

function Cards() {
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <img src="/assets/images/home/MensShoe.png" alt="Sale" className="card-image"/>
            <div className="card-content">
              <h2 className="card-title">Stylish</h2>
              <p className="card-text">Lorem ipsum dolor sit amet</p>
              <a href="#" className="card-button">Learn More</a>
            </div>
        </div>

        <div className="card">
          <img src="/assets/images/home/Womensrunningshoes-2.png" alt="Sale" className="card-image"/>
            <div className="card-content">
              <h2 className="card-title">Modern</h2>
              <p className="card-text">Lorem ipsum dolor sit amet</p>
              <a href="#" className="card-button">Learn More</a>
            </div>
        </div>

        <div className="card">
          <img src="/assets/images/home/SaleShoes-3.png" alt="Sale" className="card-image"/>
            <div className="card-content">
              <h2 className="card-title">Unique</h2>
              <p className="card-text">Lorem ipsum dolor sit amet</p>
              <a href="#" className="card-button">Learn More</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
