// Dependencies
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

// Components
import { ReactComponent as Logo } from '../Images/logo.svg';

const MyNavBar = () => {
    return(            
      <Navbar bg="light" expand="sm" style={{maxHeight:"60px"}}>
          <Navbar.Brand >          
              <Logo/>    
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
              <Nav className="mr-auto my-2 my-lg-0"  navbarScroll >    
                <LinkContainer to="/">                     
                    <Nav.Link>Home</Nav.Link>      
                </LinkContainer>    
                <LinkContainer to="/products">                   
                    <Nav.Link >Products</Nav.Link>
                </LinkContainer>   
                 <LinkContainer to="/sort">      
                    <Nav.Link >Sort</Nav.Link>
                </LinkContainer>  
                {/* <LinkContainer to="/buy">    
                    <Nav.Link >Buy</Nav.Link>    
                </LinkContainer> 
                <LinkContainer to="/support">               
                    <Nav.Link>Support</Nav.Link>    
                </LinkContainer>                                   */}
              </Nav>
              <Form className="d-flex">
                  <FormControl ype="search" placeholder="" className="mr-2" aria-label="Search" />
                  <Button variant="outline-success">Search</Button>
              </Form>
                  <Nav.Link href="#Support">Login</Nav.Link>      
            </Navbar.Collapse>
      </Navbar>                 
    );
}

export default MyNavBar;