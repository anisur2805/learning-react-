import React, { Component } from "react";

export default function HOC(HocComponent, data) {
  return class extends Component {
    state = {
      data,
    };
    render() {
      return (
        <div>
          <HocComponent data={this.state.data}></HocComponent>
        </div>
      );
    }
  };
}
