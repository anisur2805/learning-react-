import React, { Component } from "react";

export default class Address extends Component {
  
  render() {
    return (
      <div style={{ border: "3px solid red" }}>
        <h2>Address Information...</h2>

        <p>
          <label>
            Address :{" "}
            <textarea
              value={this.props.address}
              onChange={this.props.handleChange}></textarea>
          </label>
        </p>
      </div>
    );
  }
}
