import React, { Component } from "react";

export default class Summery extends Component {
  render() {
    const { quantity, address, productName } = this.props;
	console.log(productName)
    return (
      <div style={{ border: "3px solid red" }}>
        <h2>Summary...</h2>

        <p>
          <label>
            Product Name : <b> {productName}</b>
          </label>
        </p>

        <p>
          <label>
            Product Quantity :
            <input
              type="text"
              value={quantity}
              onChange={this.props.onQuantityChange}></input>
          </label>
        </p>

        <p>
          <label>
            Address : <b>{address}</b>
          </label>
        </p>

        <button>Place Order</button>
      </div>
    );
  }
}
