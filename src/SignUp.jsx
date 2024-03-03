import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const SignUp = () => {
  const [signupData, setsignupData] = useState({
    username: "",
    email: "",
    mob: "",
    pass: "",
    cpass: "",
  });
  const updateState = (e) => {
    const { name, value } = e.target;
    setsignupData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const registered = {
      username: signupData.username,
      email: signupData.email,
      mob: signupData.mob,
      pass: signupData.pass,
      cpass: signupData.cpass,
    };
    alert(`Registered Successfully.Your username is ${signupData.email}`);

    axios
      .post("http://localhost:4000/app/signup", registered)
      .then((response) => console.log(response.data));

    setsignupData({
      username: "",
      email: "",
      mob: "",
      pass: "",
      cpass: "",
    });
    window.location.href = "/Home";
  };

  return (
    <div className="container">
      <h2 className="text-center mt-3">User Signup</h2>
      {/* <hr className="mx-auto w-50"/> */}
      <div className="row mb-5">
        <div className="col-lg-6 col-md-6 col-12 m-auto">
          <form onSubmit={onSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="Input1"
                name="username"
                onChange={updateState}
                value={signupData.username}
                placeholder="Username"
              />
              <label htmlFor="Input1">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="Input2"
                name="email"
                onChange={updateState}
                value={signupData.email}
                placeholder="Email"
              />
              <label htmlFor="Input2">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="Input3"
                name="mob"
                onChange={updateState}
                value={signupData.mob}
                placeholder="Contact Number"
              />
              <label htmlFor="Input3">Contact Number</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="Input4"
                name="pass"
                onChange={updateState}
                value={signupData.pass}
                placeholder="Password"
              />
              <label htmlFor="Input4">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="Input5"
                name="cpass"
                onChange={updateState}
                value={signupData.cpass}
                placeholder="Confirm password"
              />
              <label htmlFor="Input5">Confirm Password</label>
            </div>
            <div className="form-group from-label-group">
              <input type="submit" className="btn btn-primary" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
