import React from "react";
import useSignUpForm from "./CustomHooks";

const SignUp = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            name="firstName"
            required
            onChange={handleInputChange}
            value={inputs.firstName}
          />
          <br />
          <label>Last Name</label>
          <input
            name="lastName"
            required
            onChange={handleInputChange}
            value={inputs.lastName}
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleInputChange}
            value={inputs.email}
          />
        </div>
		
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password1"
            value={inputs.password1}
            onChange={handleInputChange}
          />
        </div>
		
        <div className="form-group">
          <label>Re-enter Password</label>
          <input
            type="password"
            name="password2"
            value={inputs.password2}
            onChange={handleInputChange}
          />
        </div>
		
        <button type="submit">Sign Up</button>
		
        <hr />
      </form>

      <h3>Users Data </h3>

      <ul>
        <li>
          <h3>
            Name: {inputs.firstName}  {inputs.lastName}
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default SignUp;
