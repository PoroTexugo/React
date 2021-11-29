import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import './App.css';
import Home from './pages/home';
import MyNavBar from './components/navbar';
import ProductsPage from './pages/productsPage';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import BackOfficePage from './pages/backOfficePage';
import useToken from './useToken';
import SignUp from './pages/signUp';

function App() {
  
  const { token, setToken } = useToken();
  
  return ( 
    <>
    <Router>
        <MyNavBar/>          
        <Switch> 
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={ProductsPage}/>      
            <Route exact path="/Login"> <Login  setToken= {setToken}/> </Route>                  
            <Route exact path="/SignUp" component={SignUp}/> 
            <Route exact path='/Dashboard' component={Dashboard} />    
            <Route exact path="/BackOffice" component={BackOfficePage}/>       
        </Switch>         
    </Router>            
  </>
  );      
}

export default App;  