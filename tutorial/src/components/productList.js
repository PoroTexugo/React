// Components
import Product from './product';

const ProductList = (props) => {  

  return (     
      <div className ="productlist">
        { props.productList.map((product) =>(<Product key={product.Id}  {...product}/> )) }       
      </div>           
 
  );
}

export default ProductList;