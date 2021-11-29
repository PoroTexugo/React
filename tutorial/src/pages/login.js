import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../pages/login.css';
// import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';

const Login = (props) => {
  
  const [userName, setUserName] = useState('');      
  const [password, setPassword] = useState('');      
  
  const loginUser = async () => {  
    
    var myHeaders = new Headers();
    myHeaders.append("content-Type", " application/json");
    
    var raw = "{\r\n  \"userName\": \"" + userName + "\",\r\n  \"password\": \"" + password + "\"\r\n}";  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    return await fetch("http://localhost:7772/api/UserAuthentication/Authenticate", requestOptions)         
  }
  
  const handleSubmit = async e => { 
    
    e.preventDefault();
    const response = await loginUser();
    console.log(response);
    if(response.ok){
      const token = Buffer.from( userName+':'+password).toString('base64');
      console.log(token);      
      props.setToken({token:token});          
    }
    else{
      alert('Username or password is incorrect');
    }     
  }
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <br/>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
  </div>
  );
}
      
export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}   


        // <div className="app flex-row align-items-center">
        //     <Container>
        //         <Row className="justify-content-center">
        //             <Col md="9" lg="7" xl="6">
        //                 <CardGroup>
        //                     <Card className="p-2">
        //                         <CardBody>
        //                             <Form>
        //                                 <div class="row" className="mb-2 pageheading">
        //                                     <div class="col-sm-12 btn btn-primary">
        //                                         Login
        //                                     </div>
        //                                 </div>
        //                                 <InputGroup className="mb-3">
        //                                     <Input type="text" onChange={e => setUserName(e.target.value)} placeholder="User Name" required/>
        //                                 </InputGroup>

        //                                 <InputGroup className="mb-4">
        //                                     <Input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" required/>
        //                                 </InputGroup>

        //                                 <Button type="submit" onClick={handleSubmit} color="success" block>Login</Button>
        //                             </Form>
        //                         </CardBody>
        //                     </Card>
        //                 </CardGroup>
        //             </Col>
        //         </Row>
        //     </Container>
        // </div>