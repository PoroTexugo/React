import React, { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
 
function PostProduct() {

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState();
  const [productTypeId, setProductTypeId] = useState('');
  const [productType, setProductType] = useState('');
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
 
  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);   
    const data = {    
      name: name,
      image: image,
      price: price,
      productTypeId: productTypeId,
      setProductType: productType     
    }

    axios.post('http://localhost:7772/api/Product/InsertProduct', data).then(res => 
    {
      setData(res.data);    
      setName(''); setImage(''); setPrice(); setProductTypeId(''); setProductType('');    
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }
 
  return (
    <div className="container p-3">
      <div style={{ maxWidth: 350 }}>

        <div classNames="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={e => setName(e.target.value)} />
        </div>

        <div classNames="form-group">
          <label htmlFor="job" className="mt-2">Image</label>
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="Enter image link"
            value={image}
            onChange={e => setImage(e.target.value)} />
        </div>
        
        <div classNames="form-group">
          <label htmlFor="job" className="mt-2">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Enter price"
            value={price}
            onChange={e => setPrice(e.target.value)} />
        </div>

        <div classNames="form-group">
          <label htmlFor="job" className="mt-2">Product Type Id</label>
          <input
            type="text"
            className="form-control"
            id="productTypeId"
            placeholder="Enter product type Id"
            value={productTypeId}
            onChange={e => setProductTypeId(e.target.value)} />
        </div>

        <div classNames="form-group">
          <label htmlFor="job" className="mt-2">Product Type</label>
          <input
            type="text"
            className="form-control"
            id="productType"
            placeholder="Enter product type"
            value={productType}
            onChange={e => setProductType(e.target.value)} />
        </div>
     
        {isError && <small className="mt-3 d-inline-block text-danger">Insertion failed. Please try again.</small>}
        <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit} disabled={loading} >{loading ? 'Loading...' : 'Submit'}</button>
        { data &&<div className="mt-3">
          <strong>Product inserted.</strong><br />         
        </div>
        }       
      </div>
    </div>
  );
}
export default PostProduct;