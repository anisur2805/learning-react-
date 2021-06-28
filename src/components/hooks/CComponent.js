import React, { Component } from "react";
import { CounterContext } from "./CounterContext";

export default class CComponent extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>Class Component</h1>
        <h2>{counter}</h2>
        <CounterContext.Consumer>
          {(value) => {
			  return  <h2>{value}</h2>
		  }}
        </CounterContext.Consumer>
      </div>
    );
  }
}
