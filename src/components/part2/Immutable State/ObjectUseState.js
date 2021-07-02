import React, { useState } from "react";

const initialState = {
  fname: "John",
  lname: "Deo",
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initialState);
  const changeName = () => {
    // person.fname = "Anisur";
    // person.lname = "Rahman";
    // setPerson(person)

    const newPerson = { ...person }
    newPerson.fname = "Anisur"
    newPerson.lname = "Rahman"
    setPerson(newPerson); 
	console.log(person)
	console.log(newPerson)
  };
  console.log("ObjectUseState Render");
  return (
    <button className="btn btn-primary m-3" onClick={changeName}>
      {person.fname} {person.lname}
    </button>
  );
};
