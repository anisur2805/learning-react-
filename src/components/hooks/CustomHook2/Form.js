/* eslint-disable no-unused-vars */
import React from "react";
import useCustomHook from "./useCustomHook";
import { FormGroup, Label, Input } from "reactstrap";

const FormComponent = () => {
  const register = () => {
    console.log(values);
  };

  const [values, handleChange, handleSubmit] = useCustomHook(register);

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 offset-md-3">
            <form
              onSubmit={handleSubmit}
              className="form-group px-5 py-4 mt-5 bg-white shadow-lg border border-dark rounded">
              <FormGroup className="form-group d-flex my-2">
                <Label for="exampleEmail" sm={3}>
                  First Name
                </Label>
                <Input
                  className="form-control"
                  name="firstName"
                  required
                  onChange={handleChange}
                  value={values.firstName || ""}
                />
              </FormGroup>
              <div className="form-group d-flex my-2">
                <Label for="exampleEmail" sm={3}>
                  Last Name
                </Label>
                <input
                  className="form-control d-flex my-2"
                  name="lastName"
                  required
                  onChange={handleChange}
                  value={values.lastName || ""}
                />
              </div>

              <div className="form-group d-flex my-2">
                <Label for="exampleEmail" sm={3}>
                  Email Address
                </Label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  value={values.email || ""}
                />
              </div>

              <div className="form-group d-flex my-2">
                <Label for="exampleEmail" sm={3}>
                  Password
                </Label>
                <input
                  className="form-control"
                  type="password"
                  name="password1"
                  onChange={handleChange}
                  value={values.password1 || ""}
                />
              </div>

              <div className="form-group d-flex my-2">
                <Label for="exampleEmail" sm={3}>
                  Re-enter Password
                </Label>
                <input
                  className="form-control"
                  type="password"
                  name="password2"
                  onChange={handleChange}
                  value={values.password2 || ""}
                />
              </div>

              <button type="submit" className="btn btn-primary shadow">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
