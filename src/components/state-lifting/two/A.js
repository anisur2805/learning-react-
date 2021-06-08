import React, { Component } from "react";
import B from './B'
import C from './C'

export default class A extends Component {
  state = {
    text: "",
  };

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }
  render() {
    const { text } = this.state;
    return (
      <div>
        <B text={text} handleTextChange={this.handleTextChange} />
        <C text={text} />
      </div>
    );
  }
}
