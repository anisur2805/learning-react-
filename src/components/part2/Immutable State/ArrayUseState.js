import React, { useState } from "react";

const initialState = ["John", "Deo"];

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initialState);
  const changeName = () => {
    // persons.push("Anisur");
    // persons.push("Rahman");
    // setPersons(persons);

    const newPerson = [...persons];
    newPerson.push("Anisur");
    newPerson.push("Rahman");
    setPersons(newPerson);
  };
  console.log("ArrayUseState Render");
  return (
    <div>
      <button className="btn btn-primary m-3" onClick={changeName}>
        Clicked Me
      </button>
      {persons.map((person) => {
        return <div key={person}>{person}</div>;
      })}
    </div>
  );
};
