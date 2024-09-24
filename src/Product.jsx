import React , {Componenet, Component} from "react";
export default class Product extends Component{
    constructor(props){
        super(props);
    }
    state={id:this.props.id,
         Name:this.props.Name, price:this.props.price,quantity:this.props.quantity};
    render(){
        console.log(this.props)
        return <div className="col-lg-6">
            <div className="card m-2">
                <div className="card-body">
                    <div className="text-muted">#{this.state.id}
                        <span className="pull-right hand" onClick={()=>{this.props.onDelete(this.state.Product);}}>
                            <i className="fa fa-times" ></i>
                        </span>
                    </div>
                    <h5 className="pt-3 m-3 text-center border-top">{this.state.Name}</h5>
                    <div className="text-center">₹{this.state.price}/-</div>
                </div>
                <div className="card-footer text-center">
                    <div className="float-left">
                        <span className="badge">{this.state.quantity}</span>
                        <div className="btn-group">
                            <button className="btn btn-outline-success" onClick={()=>{this.props.onIncrement(this.state.Product);}}>+</button>
                            <button className="btn btn-outline-success"onClick={()=>{this.props.onDecrement(this.state.Product);}}>-</button>
                            
                        </div>
                    </div>
                    <div className="float-right">
                        {this.props.children}
                    </div>
                    
                </div>
            
            </div>
        </div>
    }
}