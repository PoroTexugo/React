// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'react-bootstrap/dist/react-bootstrap.min.js';

// Components
import './App.css';
import Home from './pages/home';
import MyNavBar from './components/navbar';
import ProductsPage from './pages/productsPage';

import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/Dashboard';
import BackOfficePage from './pages/backOfficePage';
import useToken from './useToken';

// Autorization
// import PrivateRoute from './components/privateRoute';
// import PublicRoute from './components/publicRoute';

function App() {
  
  // const { token, setToken } = useToken();

  // if(!token) {  
  //   return <Login setToken = {setToken} />
  // }
  
return ( 
  <> 
    {/* <div  className="wrapper">      
      <Router>
      <Switch>
             <Route exact path="/">
                <Login  setToken= {setToken}/>
            </Route> 
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/signup">
                <Register />
            </Route>
        </Switch>
       
      </Router>
    </div> */}
    <Router>
        <MyNavBar/>          
        <Switch> 
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={ProductsPage}/>      
            {/* <Route exact path="/Login"> <Login  setToken= {setToken}/> </Route>                   */}
            <Route exact path="/SignUp" component={Register}/> 
            <Route exact path='/Dashboard' component={Dashboard} />    
            <Route exact path="/BackOffice" component={BackOfficePage}/>       
        </Switch>         
    </Router>            
  </>
  );      
}

export default App;


// ;_; eat, tb vou snacks


 

    
