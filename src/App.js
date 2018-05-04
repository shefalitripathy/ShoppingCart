import reducers from './reducers';
import Home from './components/Home';
import Cart from './components/Cart';
import React from 'react';
import {render} from 'react-dom';
import ProductsList from './components/ProductsList';
import {
BrowserRouter as Router,
Route,
Switch, 
Redirect,
NavLink
} from 'react-router-dom';

const App = () => (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a href="#">
                <img typeof="foaf:Image" src="https://financialtribune.com/sites/default/files/styles/300x300/public/field/image/17january/11_mr_export_300.png?itok=DDMAozzr&amp;c=a1e5e31b50fab8768abebc4b232625ee" 
                alt="" height="84" />
                EasyShop
                </a>         
               
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            
                      <NavLink class="nav-link" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Home
                      </NavLink>
                              
                   <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>

                  <a class="cartlogo" href="/Cart">
                  <img class="_1-mlum" width="25" height="25" viewBox="0 0 20 20" src="http://www.free-icons-download.net/images/shopping-cart-logo-icon-70706.png"></img>
                  <span class="cart">Cart</span>
                  </a>
                </div>
              </nav>

                

                <Switch>
                    <Route path="/" exact  component={Home} />
                    <Route path="/Cart" component={Cart} />
                 </Switch>
              
                
              
        </div>      
    </Router>
 
);
export default App;
