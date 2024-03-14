import React from "react";
import { authActions } from "./store/index";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
//import { authActions } from "./store/index";
const AdminLogin = () => {
  const isAuth = useSelector((state) => state.authenticate.isAuth);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  const logoff = (e) => {
    e.preventDefault();
    dispatch(authActions.logoff());
  };
  return (
    <section className="container-fluid m-3">
      <div className="col-lg-6 col-md-6 col-12 m-auto">
        {!isAuth && (
          <form onSubmit={onSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                required
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
