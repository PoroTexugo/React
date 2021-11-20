// Dependencies
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteProduct = () => {

    const [name, setName] = useState('');        
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
     
    const handleSubmit =  (name) => {            
    
        axios.delete('http://localhost:7772/api/Product/DeleteProduct/?name=' + name) //' + '
        .then( resp => { resp.json(); setName(resp.name); setLoading(false);} )
        .catch(err => { setLoading(false); setIsError(true);})           
        
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
            onChange={e => setName(e.target.value)}  />
        </div>               
      
        {isError && <small className="mt-3 d-inline-block text-danger">Insertion failed. Please try again.</small>}
        <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit(name)} disabled={loading} >{loading ? 'Loading...' : 'Submit'}</button>
        { name  &&<div className="mt-3">
          <strong>Product deleted.</strong><br />         
        </div>
        }         
      </div>
    </div>
    );
    
}

export default DeleteProduct