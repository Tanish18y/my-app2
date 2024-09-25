import React ,{ Component } from "react";
import NavBar from "./Navbar"
import MainContent from "./MainContent";
export default class CustomersList extends Component{
    state={pageTitle:"Customers",
        count:4,
        customers:[
            {id:1 , name:"Abhi" , phone: "123456789" , address:{city: "Noida"},photo:"https://picsum.photos/id/1024/60"},
            {id:2 , name:"Papaji" , phone: "123456789" , address:{city: "Bhopal"},photo:"https://picsum.photos/id/1000/60"},
            {id:3 , name:"Mummy" , phone:null,address:{city: "Bhopal"},photo:"https://picsum.photos/id/1003/60"},
            {id:4 , name:"Shivam" , phone:null,address:{city: "Bhopal"},photo:"https://picsum.photos/id/10/60"}]    
    };
    
    render(){
        return <div>
            <NavBar/>
            <h4 className=" m-1 p-1">{this.state.pageTitle}
                <span className="badge badge-secondary m-2">{this.state.count}</span>
                <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
            </h4>
            <table className="table border-bottom">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Pic</th>
                        <th>Customer's Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getCrow()}
                </tbody>
            </table>
        </div>
         
    }
    onRefreshClick=()=>{
        this.setState({
            count:69
        })
    }
    getPhone=(phone)=>{
        return phone ?
            (phone):
            (<div className="bg-warning p-2  text-center">Nope</div>);
    }
    getCrow=()=>{
        return this.state.customers.map((cust,index)=>{
            return(
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td><img src={cust.photo} alt="V.I.P"/>
                        <div>
                            <button className="btn btn-sm btn-secondary" onClick={()=>{this.onChangePictureClick(cust,index);}}>Change Pic</button>
                        </div>
                    </td>
                    <td >{cust.name}</td>
                    <td>{this.getPhone(cust.phone)}</td>
                    <td>{cust.address.city}</td>
                </tr>
            );
        });
    };
    onChangePictureClick=(cust,index)=>{
        var custArr=this.state.customers;
        custArr[index].photo="https://picsum.photos/id/10/60"
        this.setState({customers:custArr})
    }
    
}
