import React, { Component } from "react";

export default class emoji extends Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
  render(override) {
    let text = "I love JavaScript";
    if (override) text = override;
    return <div>{text}</div>;
  }
}
