import React, { useReducer, useState } from "react";

const listStyle = {
  padding: "1rem 2rem",
  backgroundColor: "#000",
  color: "#fff",
  margin: "0 0 5px",
};

export default function UseReducerComponent2() {
  const initialState = [
    { id: Date.now(), name: "Anisur", email: "anisur@gmail.com" },
  ];

  function reducerCBFunc(state, action) {
    switch (action.type) {
      case "add":
        return [...state, action.payload];
      case "delete":
        return state.filter((contact) => {
          return contact.id !== action.payload.id;
        });
      default:
        throw new Error();
    }
  }

  const [state, setState] = useReducer(reducerCBFunc, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const addContact = (e) => {
    e.preventDefault();
    const contact = {
      id: Date.now(),
      name,
      email,
    };
    setName("");
    setEmail("");

    setState({ type: "add", payload: contact });
  };
  return (
    <div>
      <h1>Use of UseReducer</h1>
      <form onSubmit={addContact}>
        <div style={{ marginBottom: "10px" }}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Add Contact</button>
      </form>

      <h2>User Lists</h2>
      <ul>
        {state.map((contact) => {
          return (
            <li key={contact.id} style={listStyle}>
              <h3>{contact.name}</h3>
              <p>{contact.email}</p>
              <button
                onClick={() =>
                  setState({ type: "delete", payload: { id: contact.id } })
                }>
                Delete Contact
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
