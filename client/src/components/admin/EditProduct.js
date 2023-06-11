import React, { useState, useEffect, useContext } from 'react';
import { ErrorsContext } from '../../context/errorsContext';
import { v4 as uuidv4 } from 'uuid';
import { ProductContext } from '../../context/productContext';
import '../../styles/FormStyles/AddProductForm.css'
import { useParams } from 'react-router-dom';

function EditProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { errors, setErrors } = useContext(ErrorsContext)
  const {handleUpdateProduct} = useContext(ProductContext)
  const [formData, setFormData] = useState({
    sku: '',
    discount_percent: '',
    inventory_qty: '',
    units: "",
    name: "",
    brand: "",
    description: "",
    price: '',
    image_url: ''
  })

  useEffect(() => {
    fetch(`/products/${productId}`)
      .then((r) => r.json())
      .then((data) => {
        setProduct(data)
        setFormData({
          sku: data.sku,
          discount_percent: data.discount_percent,
          inventory_qty: data.inventory_qty,
          units: data.units,
          name: data.name,
          brand: data.brand,
          description: data.description,
          price: data.price,
          image_url: data.image_url
        })
      });
  }, [productId]);

  if (!product) return 'Loading...';

  function handleChange(e) {
    if (e.target.name === "image_url") {
      // const myFileInput = document.querySelector('input[type="file"]');
      // const myFileName = myFileInput?.files[0]?.name;
      setFormData({
        ...formData,
        image_url: e.target.files[0]
      })
    } else{
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  function handleSubmit(e) {
    // const { sku, discount_percent, inventory_qty, units, name, description, price, image_url } = formData

    const data = new FormData() // Create a new FormData object

    // Append all the fields to the form data
    for (const name in formData) {
      if (name === "image_url") {
        const myFileInput = document.querySelector('input[type="file"]');
        const file = myFileInput?.files[0]; // Get the file object
        data.append("product[" + name + "]", file) // Append the file object, not the name
      } else {
        data.append("product[" + name + "]", formData[name])
      }
    }

    e.preventDefault()
    fetch(`/products/${product.id}`, {
      method: 'PATCH',
      body: data
    })
      .then(r => {
        if (r.ok) {
          r.json().then(product => {
            handleUpdateProduct(product)
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
              image_url: ''
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
          // value={formData.image_url}
        /><br/>

        <button>submit</button>

      </form>
      {errors?.errors?.length > 0 ?
        errors?.errors?.map(error => <p key={uuidv4()}>{error}</p>)
        : null
      }
    </div>
  );
}

export default EditProduct;
