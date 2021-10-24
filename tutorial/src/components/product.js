// Image: either the user loads its own image or the site displays a default:
const Image = (props) => {    
    return (     
        <img
            src = {props.source}              
            width="130px"
            height="130px"
            alt="no img">
        </img>  
    );
}

// Product : has an image and a description 
const Product = (props) => {        
    return(   
        <article className ="product">
        <h5> {props.Name}</h5>       
            <Image source={props.Image}/>
            <h6> {props.Price} €</h6> 
            <button id="buy">Cart</button>                
        </article>             
    );
}

export default Product;
