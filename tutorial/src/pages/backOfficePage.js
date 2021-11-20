// Dependencies

import { Nav } from 'react-bootstrap';

// Components
import PostProduct from "./postProduct";
import DeleteProduct from "./deleteProduct";

const BackOfficePage = () => {

    return (
        <>
            <div>
            <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item> <Nav.Link href="/">Home</Nav.Link> </Nav.Item>
                <Nav.Item> <Nav.Link eventKey="products">Products</Nav.Link> </Nav.Item>
                <Nav.Item> <Nav.Link eventKey="transactions">Transactions</Nav.Link> </Nav.Item>
                <Nav.Item> <Nav.Link eventKey="users" >  Users  </Nav.Link> </Nav.Item>
                <Nav.Item> <Nav.Link eventKey="users" >  Logout  </Nav.Link> </Nav.Item>            
                </Nav>
            </div>           

            <div>
                <h4>Insert Product</h4>
                <div>
                    <PostProduct/>
                </div>
                <br></br>
                <h4>Delete Product</h4>
                <div>
                    <DeleteProduct/>
                </div>            
            </div>
        </>
    );
}

export default BackOfficePage