import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { authActions } from "./store/index";
import { useDispatch, useSelector } from "react-redux";
import { userLoginActions } from "./store/index";
// import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";

const SignupLogin = () => {
  const [signupData, setsignupData] = useState({
    username: "",
    email: "",
    mob: "",
    pass: "",
    cpass: "",
  });
  const [loginData, setloginData] = useState({
    email: "",
    pass: "",
  });
  const [admLoginData, setadmLoginData] = useState({
    email: "",
    pass: "",
  });
  const [message, setmessage] = useState(false);

  // const [name, setName] = useState('');
  // const [pwd, setPwd] = useState('');
  // const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const isAuth = useSelector((state) => state.authenticate.isAuth);
  const adminName = useSelector((state) => state.authenticate.adminID);
  const userlogin = useSelector((state) => state.authenticateUser.userlogin);
  const username = useSelector((state) => state.authenticateUser.username);

  // const handle = () => {
  //   setCookie("Email", loginData.email, { path: "/" });
  //   setCookie("Password", loginData.pass, { path: "/" });
  // };
  const updateState = (e) => {
    const { name, value } = e.target;
    setsignupData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const updateLoginState = (e) => {
    const { name, value } = e.target;
    setloginData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const updateAdminState = (e) => {
    const { name, value } = e.target;
    setadmLoginData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const onSignUpSubmit = (e) => {
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
    //window.location.href = "/Home";
  };
  const login = (e) => {
    e.preventDefault();
    const form = {
      email: loginData.email,
      pass: loginData.pass,
    };

    axios.post("http://localhost:4000/app/userlogin", form).then((response) => {
      if (response.data.status === "Ok") {
        dispatch(userLoginActions.login(response.data.data));
        //handle();
      }
    });

    setloginData({
      email: "",
      pass: "",
    });
    //window.location.href = "/Home";
  };
  const admLoginDataSubmit = (e) => {
    e.preventDefault();
    const form = {
      email: admLoginData.email,
      pass: admLoginData.pass,
    };

    axios.post("http://localhost:4000/app/ADMlogin", form).then((response) => {
      if (response.data.status === "Ok") {
        dispatch(authActions.login(response.data.data));
      } else {
        setmessage(true);
      }
    });

    setadmLoginData({
      email: "",
      pass: "",
    });
  };

  const dispatch = useDispatch();
  const logoffUser = (e) => {
    e.preventDefault();
    dispatch(userLoginActions.logoff());
    // removeCookie("Email");
    // removeCookie("Password");
  };
  const logoffAdmin = (e) => {
    e.preventDefault();
    dispatch(authActions.logoff());
  };
  return (
    <>
      <div className="container">
        {/* <hr className="mx-auto w-50"/> */}
        <div className="row">
          <div className="col-lg-5 col-md-5 col-8 mx-auto">
            <h3 className="text-center m-3">User Signup</h3>
            <form onSubmit={onSignUpSubmit}>
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
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Submit"
                />
              </div>
            </form>
          </div>
          <div className="col-lg-5 col-md-5 col-8 mx-auto">
            <section>
              <h3 className="text-center m-3">User Login</h3>
              <form onSubmit={login}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="Input6"
                    name="email"
                    onChange={updateLoginState}
                    value={loginData.email}
                    placeholder="Email"
                  />
                  <label htmlFor="Input6">Email</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="Input7"
                    name="pass"
                    onChange={updateLoginState}
                    value={loginData.pass}
                    placeholder="Password"
                  />
                  <label htmlFor="Input7">Password</label>
                </div>

                <div className="form-group from-label-group">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
                  />
                </div>
              </form>
              {/* {cookies.Email && (
                <h5 className="mt-2">Logged in as {cookies.Email}</h5>
              )} */}
              {userlogin && (
                <div>
                  You are logged-in as {username} <br />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={logoffUser}
                  >
                    LogOut
                  </button>
                </div>
              )}
            </section>
            <section>
              <h3 className="text-center m-3">Admin Login</h3>
              <form onSubmit={admLoginDataSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="Input8"
                    name="email"
                    onChange={updateAdminState}
                    value={admLoginData.email}
                    placeholder="Email"
                  />
                  <label htmlFor="Input8">Email</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="Input9"
                    name="pass"
                    onChange={updateAdminState}
                    value={admLoginData.pass}
                    placeholder="Password"
                  />
                  <label htmlFor="Input9">Password</label>
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
              {isAuth && (
                <div>
                  You are logged-in as {adminName}... <br />
                  <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    to="/registrations"
                  >
                    Click here to check for registration details.
                  </NavLink>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={logoffAdmin}
                  >
                    LogOut
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <hr className="mx-auto w-50"/> */}
        <div className="row mb-5"></div>
      </div>
    </>
  );
};
export default SignupLogin;
