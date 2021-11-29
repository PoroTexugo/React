import { useState, useEffect } from "react";
import ProductList from '../components/productList' 
import Sidebar from '../components/sidebar'

const ProductsPage = () => {

    const [productList, setProductList] = useState([]);  

    const GetProductList = async (category="") =>{
    
        const result = await fetch('http://localhost:7772/api/Product/GetProductAndTypeList/' + category,
        {
            method: 'get',        
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',   
                'Access-Control-Expose-Headers': 'Content-Encoding',
                // 'Content-Range': 'bytes : 0-9/*'         
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
                <div className="item4">
                   <ProductList productList = { productList } />                   
                </div>                         
            </div> 
      </>   
    );
}

export default ProductsPage;