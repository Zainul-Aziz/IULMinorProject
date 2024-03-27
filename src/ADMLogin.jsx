import React, { Component, useState } from "react";
import { authActions } from "./store/index";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const ADMLogin = () => {
  const [signupData, setsignupData] = useState({
    email: "",
    pass: "",
  });
  const [message, setmessage] = useState(false);
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
    const form = {
      email: signupData.email,
      pass: signupData.pass,
    };
    //alert(`Registered Successfully.Your username is ${signupData.email}`);

    axios.post("http://localhost:4000/app/ADMlogin", form).then((response) => {
      //console.log(response.data);
      if (response.data.status === "Ok") {
        console.log("Successfully logged in.");
        dispatch(authActions.login());
      } else {
        setmessage(true);
        console.log("Something went wrong.");
      }
    });

    setsignupData({
      email: "",
      pass: "",
    });
    //window.location.href = "/Home";
  };
  const isAuth = useSelector((state) => state.authenticate.isAuth);
  const dispatch = useDispatch();
  const logoff = (e) => {
    e.preventDefault();
    dispatch(authActions.logoff());
  };
  return (
    <>
      {!isAuth && (
        <div className="container">
          <h2 className="text-center mt-3">User Signup</h2>
          {/* <hr className="mx-auto w-50"/> */}
          <div className="row mb-5">
            <div className="col-lg-6 col-md-6 col-12 m-auto">
              <form onSubmit={onSubmit}>
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
                {message && <div>Something went wrong...please retry...</div>}
                <div className="form-group from-label-group">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {isAuth && (
        <div>
          You are logged-in as Admin... <br />
          <NavLink
            activeClassName="menuActive"
            className="nav-link"
            to="/registrations"
          >
            Click here to check for registration details.
          </NavLink>
          <br />
          <button type="submit" class="btn btn-primary" onClick={logoff}>
            LogOut
          </button>
        </div>
      )}
    </>
  );
};
export default ADMLogin;
