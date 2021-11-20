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