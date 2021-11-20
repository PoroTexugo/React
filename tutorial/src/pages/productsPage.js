// Dependencies
import { useState, useEffect } from "react";

// Components
import ProductList from '../components/productList' 
import Sidebar from '../components/sidebar'

const ProductsPage = () => {

    const [productList, setProductList] = useState([]);  

    const GetProductList = async (category="") =>{
    
        const result = await fetch('http://localhost:7772/api/Product/GetProductAndTypeList/' + category,
        {
            method: 'get',     //mode: 'cors'     
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',              
        },
        });

        const products =  JSON.parse(await result.json());  
        setProductList(products); 
  } 
  
  useEffect(()=> {
    GetProductList();
  },[])

    return(
        <>
            <div className="grid-container">
                <div className="item2">
                    <Sidebar GetProductList={ GetProductList }/>
                </div> 
                {/* <div className="item3">
                    <h1>Sort</h1>
                </div>    */}
                <div className="item4">
                   <ProductList productList = { productList } />                   
                </div>                         
            </div> 
      </>   
    );
}

export default ProductsPage;