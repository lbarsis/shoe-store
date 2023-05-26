import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';

function AddProduct() {
  const [formData, setFormData] = useState({
    sku: '',
    discount_percent: '',
    inventory_qty: '',
    units: "",
    name: "",
    brand: "",
    description: "",
    price: '',
    image_url: ""
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    const { sku, discount_percent, inventory_qty, units, name, description, price, image_url } = formData

    e.preventDefault()
    fetch('/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(r => {
        if (r.ok) {
          r.json().then(product => {
            console.log(product)
            // handleAddNewItinerary(itinerary)
            // setItineraryErrors(null)
            // setFormData({
            //   sku: '',                                                  
            //   discount_percent: '',                                       
            //   inventory_qty: '',                                            
            //   units: "",                                        
            //   name: "",                                  
            //   brand: "",                                         
            //   description: "",
            //   price: '',
            //   image_url: ""
            // })
          })
        } else {
          r.json().then(err => {
            console.log(err)
          })
        }
      }
      )
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>SKU</label>
        <input
          type="text"
          name="sku"
          onChange={handleChange}
          value={formData.sku}
        />

        <label>Discount Percentage</label>
        <input
          type="text"
          name="discount_percent"
          onChange={handleChange}
          value={formData.discount_percent}
        />

        <label>Current Inventory</label>
        <input
          type="text"
          name="inventory_qty"
          onChange={handleChange}
          value={formData.inventory_qty}
        />

        <label>Units</label>
        <input
          type="text"
          name="units"
          onChange={handleChange}
          value={formData.units}
        />

        <label>Product Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />

        <label>Brand</label>
        <input
          type="text"
          name="brand"
          onChange={handleChange}
          value={formData.brand}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />

        <label>Sell Price</label>
        <input
          type="text"
          name="price"
          onChange={handleChange}
          value={formData.price}
        />

        <label>Upload Image</label>
        <input
          type="text"
          name="image_url"
          onChange={handleChange}
          value={formData.image_url}
        />

        <button>submit</button>

      </form>
    </div>
  );
}

export default AddProduct;
