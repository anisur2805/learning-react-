import React, { Component } from "react";

export default class OrderInfoComponent extends Component {
  render() {
    return (
      <div style={{ border: "3px solid red" }}>
        <h2>Order Information...</h2>

        <p>
          <label>
            Product Name :
            <select
              value={this.props.productName}
              onChange={this.props.productNameHandler}>
              <option value="Product-1">Product-1</option>
              <option value="Product-2">Product-2</option>
              <option value="Product-3">Product-3</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            Enter Quantity :{" "}
            <input
              type="text"
              value={this.props.quantity}
              onChange={this.props.orderInfoChanged}></input>
          </label>
        </p>
      </div>
    );
  }
}
