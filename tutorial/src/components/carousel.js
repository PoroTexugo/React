import Carousel from 'react-bootstrap/Carousel'

const MyCarousel = () =>{
      
    return(      
        <div  className="carousel">        
        <Carousel variant="dark">
            <Carousel.Item className="interval: 3000">
                <img 
                src="https://ageconcerntaranaki.org.nz/wp-content/uploads/2019/12/christmas.jpg"
                alt="Second slide"
                />
               <Carousel.Caption>
                    <h5>This week only!</h5>
                    <p>Christmas Promotions up to 50%.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="interval: 3000" >
                <img                 
                  src="https://mirvac-cdn-prd.azureedge.net/-/media/Project/Mirvac/Retail/Base-Retail-Site/Images/Blog-Images-2021/How-to-Make-the-Most-of-Your-Easter-Weekend-Banner.jpg"      
                  alt="First slide"
                />
                <Carousel.Caption>
                    <h5>From February 3rd to Marth 14th</h5>
                    <p>Find the best discounts on our online shop.</p>
                </Carousel.Caption>                
            </Carousel.Item>            
            <Carousel.Item className="interval: 3000">
                <img  
                // style={{"max-height:"450px"}}
                src="https://cdn.shopify.com/s/files/1/0043/3294/5479/articles/OP_Website_-_Summer_Sale_1200x.png?v=1597155166"
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Starting June 15th!</h5>
                    <p>Summer items at the best prices.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>     
        </div> 
    );
}
export default MyCarousel;