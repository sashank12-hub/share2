import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import LoggedInRedirect from './Routes/LoggedInRedirect';
import PrivateRoute from './Routes/PrivateRoute';
import Navbar from './Navbar';
import Login from './pages/Login/Login';
import Orders from './pages/Orders/Orders';
import Order from './pages/Order';
import Products from './pages/Products/Products';
import Product from './pages/Product';
import Users from './pages/Users/Users';

const App = () => 
(
  <Router>
    <Navbar />
    <Switch>
      <LoggedInRedirect path="/kafene" exact Component={Login} />
      <PrivateRoute exact path="/kafene/orders" Component={Orders} />
      <PrivateRoute exact path="/kafene/order/:orderId" Component={Order} />
      <PrivateRoute exact path="/kafene/products" Component={Products} />
      <PrivateRoute exact path="/kafene/product/:productId" Component={Product} />
      <PrivateRoute exact path="/kefene/users" Component={Users} />
    </Switch> 
  </Router>
);

export default App;
