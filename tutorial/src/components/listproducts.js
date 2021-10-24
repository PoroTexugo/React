// Dependencies
import { useState, useEffect } from "react";

// Components
import Product from './product';
import Sidebar from './sidebar'

const ProductList = () => {

  const [productList, setProductList] = useState([]);
  const GetProductList = async () =>{
    
    const result = await fetch('http://localhost:7772/api/Product/GetProductList',
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
    });

    const products =  JSON.parse(await result.json());  
    setProductList(products); 
  } 

  useEffect(()=> {
    GetProductList();
  },[])

  return (      
       <>  
          <div className="grid-container">
            <div className="item2">
            <Sidebar/> 
            </div> 

            <div className="item3">
              <h1>Sort</h1>
            </div>

            <div className="item4">
              <div className ="productlist">
                { productList.map((product) =>(<Product key={product.Id}  {...product}/> )) }       
              </div>             
            </div> 
          </div> 
      </>   
  );
}
export default ProductList;