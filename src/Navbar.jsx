import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./index.css";
import "./App.css";

library.add(faUser);

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid ">
                {/* <a className="navbar-brand" href="/">
                  EventMaster
                </a> */}
                <NavLink className="navbar-brand" aria-current="page" to="/">
                  EventMaster
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menuActive"
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menuActive"
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menuActive"
                        className="nav-link"
                        to="/events"
                      >
                        Events
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menuActive"
                        className="nav-link"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      {/* <img
                        src=""
                        class="img-responsive img-circle mystyle"
                        width="50"
                      /> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menuActive"
                        className="nav-link"
                        to="/registerORLogin"
                      >
                        <FontAwesomeIcon icon="user" to="/registerORLogin" />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
