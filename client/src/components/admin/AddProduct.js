import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { ErrorsContext } from '../../context/errorsContext';
import { v4 as uuidv4 } from 'uuid';
import { ProductContext } from '../../context/productContext';
import '../../styles/FormStyles/AddProductForm.css'

function AddProduct() {
  const { errors, setErrors } = useContext(ErrorsContext)
  const {handleAddProduct} = useContext(ProductContext)
  const [formData, setFormData] = useState({
    sku: '',
    discount_percent: '',
    inventory_qty: '',
    units: "",
    name: "",
    brand: "",
    description: "",
    price: '',
    image_url: []
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
      body: JSON.stringify({ product: formData })
    })
      .then(r => {
        if (r.ok) {
          r.json().then(product => {
            handleAddProduct(product)
            setErrors(null)
            setFormData({
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
          })
        } else {
          r.json().then(err => {
            setErrors(err)
          })
        }
      }
      )
  }
  return (
    <div className="add-product-form">
      <form onSubmit={handleSubmit}>
        <label>SKU</label><br/>
        <input
          type="text"
          name="sku"
          onChange={handleChange}
          value={formData.sku}
        /><br/>

        <label>Discount Percentage</label><br/>
        <input
          type="text"
          name="discount_percent"
          onChange={handleChange}
          value={formData.discount_percent}
        /><br/>

        <label>Current Inventory</label><br/>
        <input
          type="text"
          name="inventory_qty"
          onChange={handleChange}
          value={formData.inventory_qty}
        /><br/>

        <label>Units</label><br/>
        <input
          type="text"
          name="units"
          onChange={handleChange}
          value={formData.units}
        /><br/>

        <label>Product Name</label><br/>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        /><br/>

        <label>Brand</label><br/>
        <input
          type="text"
          name="brand"
          onChange={handleChange}
          value={formData.brand}
        /><br/>

        <label>Description</label><br/>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={formData.description}
        /><br/>

        <label>Sell Price</label><br/>
        <input
          type="text"
          name="price"
          onChange={handleChange}
          value={formData.price}
        /><br/>

        <label>Upload Image</label><br/>
        <input
          type="file"
          name="image_url"
          onChange={handleChange}
          value={formData.image_url}
        /><br/>

        <button>submit</button>

      </form>
      {errors?.errors.length > 0 ?
        errors?.errors?.map(error => <p key={uuidv4()}>{error}</p>)
        : null
      }
    </div>
  );
}

export default AddProduct;
