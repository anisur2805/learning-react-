import React, { Component } from "react";
import OrderInfoComponent from "./OrderInfoComponent";
import AddressComponent from "./Address";
import SummaryComponent from "./Summery";

export default class OrderComponent extends Component {
  state = {
    quantity: "",
    address: "",
	productName: "Product 1",
  };

  orderInfoChanged = (e) => {
    this.setState({ quantity: e.target.value });
  };

  addressChanged = (e) => {
    this.setState({ address: e.target.value });
  };
  
  productNameHandler = (e) => {
    this.setState({ productName: e.target.value }); 
  };

  render() {
	  const {quantity, address, productName}  = this.state
    return (
      <div className="e_commerce__wrapper">
        <h1>Welcome to Product Order Screen...</h1>

        <OrderInfoComponent
          quantity={quantity}
		  productName={productName}
		  productNameHandler={this.productNameHandler}
          orderInfoChanged={this.orderInfoChanged}
		  ></OrderInfoComponent>

       <AddressComponent
          address={address}
          handleChange={this.addressChanged}></AddressComponent>

         <SummaryComponent
          quantity={quantity}
          address={address}
          onQuantityChange={this.orderInfoChanged}></SummaryComponent>
      </div>
    );
  }
}
