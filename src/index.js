import React from "react";
import ReactDom from"react-dom";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/css/bootstrap.css";
import  {NavBar}  from "./Navbar";
import "./index.css"
import App from "./CustomersList";
import MainContent from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
import "font-awesome/css/font-awesome.css"
import Login from "./Login" ;
import Dashboard from "./Dashboard";
import CustomersList from "./CustomersList";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Fragment } from "react";

const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <NavBar/>
        <Login/>
    </React.Fragment>
);



