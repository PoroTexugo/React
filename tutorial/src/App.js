// Dependencies
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import MyNavBar from './components/navbar';
import Home from './components/home';
import ProductList from './components/listproducts';
// import Sort from './components/sort'

function App() {
  return ( // o router fica na app importas a navbar: chamas os routes, aparece
      <div>
        <Router>
          <MyNavBar/> 
            <Route 
              exact path="/" component={Home}>
            </Route>
            <Route
              exact path="/products" component={ProductList}>
            </Route> 
            {/* <Route 
              exact path="/sort" component={Sort}>
            </Route> */}
        </Router>
      </div>
  );
}

export default App;