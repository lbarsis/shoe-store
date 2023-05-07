import React from 'react';
import '../../styles/HomeStyles/Cards.css'
import saleShoe from '../../images/home/SaleShoes-3.png'
import mensShoe from '../../images/home/Mens Shoe.png'
import womensShoe from '../../images/home/Womensrunningshoes-2.png'

function Cards() {
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <img src={mensShoe} alt="Sale" className="card-image"/>
            <div className="card-content">
              <h2 className="card-title">Men</h2>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan commodo orci vel tincidunt. Sed venenatis velit ut massa iaculis, a dictum ipsum finibus. Duis auctor enim in elementum suscipit. </p>
              <a href="#" className="card-button">Learn More</a>
            </div>
        </div>

        <div className="card">
          <img src={womensShoe} alt="Sale" className="card-image"/>
            <div className="card-content">
              <h2 className="card-title">Women</h2>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan commodo orci vel tincidunt. Sed venenatis velit ut massa iaculis, a dictum ipsum finibus. Duis auctor enim in elementum suscipit. </p>
              <a href="#" className="card-button">Learn More</a>
            </div>
        </div>

        <div className="card">
          <img src={saleShoe} alt="Sale" className="card-image"/>
            <div className="card-content">
              <h2 className="card-title">Sale</h2>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan commodo orci vel tincidunt. Sed venenatis velit ut massa iaculis, a dictum ipsum finibus. Duis auctor enim in elementum suscipit. </p>
              <a href="#" className="card-button">Learn More</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
