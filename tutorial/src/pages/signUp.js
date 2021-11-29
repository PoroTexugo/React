import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';

const SignUp = (props) => {

  const [userName, setUserName] = useState('');     
  const [password, setPassword] = useState('');    
  const [city, setCity] = useState('');    
  const [country, setCountry] = useState('');
   
  const UserName = (event) =>{
    setUserName(userName);
  }

  const Password = (event) =>{
    setPassword(password);
  }   
      
 const City = (event) => {
   setCity(city);
  }

  const Country = (event) => {
    setCountry(country);
  }

  const signUp = (event) => {
    fetch('http://localhost:7772/api/UserAuthentication/CreateUser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: setUserName(userName),
        password: setPassword(password),  
        city: setCity(city),
        country: setCountry(country)
      })
    }).then((Response) => Response.json())
      .then((Result) => {
        if (Result.Status === 'Success')
            props.history.push("/Dashboard");
        else
          alert('Un-authenticated User!!')
      })
  }

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="6">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form>
                  <div class="row" className="mb-2 pageheading">
                    <div class="col-sm-12 btn btn-primary">
                      Sign Up
                    </div>
                  </div>

                  <InputGroup className="mb-3">
                    <Input type="text" onChange={UserName} placeholder="User Name" required/>
                  </InputGroup>

                  <InputGroup className="mb-4">
                      <Input type="password" onChange={Password} placeholder="Password" required/>
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Input type="text"  onChange={City} placeholder= "City" />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <Input type="text"  onChange={Country} placeholder="Country" />
                  </InputGroup>                   

                  <Button  onClick={signUp}  color="success" block>Create Account</Button>
                </Form>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;