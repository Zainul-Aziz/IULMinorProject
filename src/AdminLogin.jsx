import React, { useState } from "react";
import { authActions } from "./store/index";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { event } from "jquery";
const AdminLogin = () => {
  // const [data, setdata] = useState({
  //   email: "",
  //   pass: "",
  // });
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const handleInput = (e) => {
  //   setdata({ ...data, [e.target.name]: e.target.value });
  // };
  const onSubmitClick = async (e) => {
    e.preventDefault();
    //console.log(data);
    // const form = new FormData();
    // form.append("email", email);
    // form.append("pass", pass);
    // console.log(form);
    const data = {
      emailId: email,
      password: pass,
    };
    console.log(data);
    //console.log(`${email} ${pass}`);
    axios
      .post("http://localhost:4000/app/checkAdmin/", data)
      // .get("http://localhost:4000/app/checkAdmin/" + email + "/" + pass)
      .then((response) => response.status)
      .catch((err) => console.log(err));
    // .then((res) => console.log(res))
    // .catch((err) => console.log(err));
    //console.log(result);
    //console.log(result.data);
    // if (result.status === "Ok") {
    //   dispatch(authActions.login());
    // } else {
    //   alert("Incorrect password...");
    // }
  };
  const isAuth = useSelector((state) => state.authenticate.isAuth);
  const dispatch = useDispatch();
  const logoff = (e) => {
    e.preventDefault();
    dispatch(authActions.logoff());
  };
  return (
    <section className="container-fluid m-3">
      <div className="col-lg-6 col-md-6 col-12 m-auto">
        {!isAuth && (
          <form onSubmit={onSubmitClick}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="text"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="text"
                name="pass"
                class="form-control"
                id="exampleInputPassword1"
                required
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </div>
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
    </section>
  );
};

export default AdminLogin;
