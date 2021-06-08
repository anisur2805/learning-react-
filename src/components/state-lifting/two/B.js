import React from "react";

export default function B({ text, handleTextChange }) {
  return <input value={text} onChange={handleTextChange} />;
}
