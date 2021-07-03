import React, { useState } from "react";

export default function UseStateTow() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />

        <h2>
          FirstName: {name.firstName} LastName: {name.lastName}
        </h2>
        {/* {JSON.stringify(name)} */}
      </form>
    </div>
  );
}
