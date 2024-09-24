import { useState } from "react";
import React , {Component} from "react";
import Product from "./Product"
export default class ShoppingCart extends Component{
    constructor(props){
        console.log("constructor-ShoppingCart")
        super(props);
        this.state={
            products:[{id:1,Name:"iPhone13",price:40000,quantity:0},
            {id:2,Name:"iPhone14",price:50000,quantity:0},
            {id:3,Name:"iPhone15",price:69000,quantity:0},
            {id:4,Name:"iPhone16",price:80000,quantity:0}
            ]
        };
    }
    render(){
        console.log("render-ShoppingCart")
        return <div className="container-fluid">
            <h4 >Shopping Cart</h4>
            <div className="row">
                {this.state.products.map((prod)=>{
                    return <Product key={prod.id} id={prod.id} Name={prod.Name} price={prod.price} quantity={prod.quantity}
                    onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}>
                        <button className="btn btn-primary">Buy Now</button>
                        </Product>
                })}
            </div>
            
            
            </div>
    }
    componenetDidMount=async()=>{
        var response=await fetch("http://localhost:3333/products",{
            method:"GET",
        });
        var prods=await response.json();
        console.log(prods);
        this.setState({products:prods});
    }
    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate-ShoppingCart",
            prevProps,
            prevState,
            this.props,
            this.state)
    }
    handleIncrement=(Product)=>{
        console.log("handleIncrement",Product);
    };
    handleDecrement=(Product)=>{
        console.log("handleDecrement",Product);
    };
    handleDelete=(Product)=>{
        let allProducts=[...this.state.products];
        let index=allProducts.indexOf(Product);
        if(window.confirm("Are u sure?")){
            
            allProducts.splice(index,1);
            this.setState({products:allProducts});
        }
        
    }
}