import React ,  { Component } from "react";
import MainContent from "./MainContent";
import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {createBrowserRouter} from "react-router-dom/cjs/react-router-dom.min"

export class NavBar extends Component{
    render(){
        return (<React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
  <a className="navbar-brand" href="/App">eCommerce</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
      <li className="nav-item">
        <Link to="/" className="nav-link" >Login</Link>
      </li>
      
      
    </ul>
    
  </div>
</nav>
          
        </React.Fragment>
        
    );
        
            
  }
}
export default NavBar