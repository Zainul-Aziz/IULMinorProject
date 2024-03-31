import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { userLoginActions } from "./store/index";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [data, setdata] = useState({
    fname: "",
    lname: "",
    uname: "",
    ucity: "",
    ustate: "",
    university: "",
    ucourse: "",
    ubranch: "",
    uyear: "",
    uevent: "",
    tname: "",
    tsize: "",
  });
  const updateState = (e) => {
    const { name, value } = e.target;
    setdata((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const isAuth = useSelector((state) => state.authenticateUser.userlogin);
  console.log(isAuth);
  if (!isAuth) {
    window.location.href = "/registerORLogin";
  }
  const onSubmit = (event) => {
    event.preventDefault();
    const registrationDetail = {
      fname: data.fname,
      lname: data.lname,
      uname: data.uname,
      ucity: data.ucity,
      ustate: data.ustate,
      university: data.university,
      ucourse: data.ucourse,
      ubranch: data.ubranch,
      uyear: data.uyear,
      uevent: data.uevent,
      tname: data.tname,
      tsize: data.tsize,
    };

    alert(
      `Congratulations..Team ${data.tname} is Successfully Registered in ${data.uevent}`
    );
    axios
      .post("http://localhost:4000/app/registration", registrationDetail)
      .then((res) => console.log(res.data));
    setdata({
      fname: "",
      lname: "",
      uname: "",
      ucity: "",
      ustate: "",
      university: "",
      ucourse: "",
      ubranch: "",
      uyear: "",
      uevent: "",
      tname: "",
      tsize: "",
    });

    window.location.href = "/Home";
  };

  return (
    <div className="container px-5">
      <h1 className="text-center mt-2 ">Event Registration Form</h1>
      <form onSubmit={onSubmit} className="row g-3 mt-2">
        <div className="col-md-4">
          <label for="fname" className="form-label">
            First name
          </label>
          <input
            type="text"
            name="fname"
            className="form-control"
            placeholder="Enter First Name"
            onChange={updateState}
            value={data.fname}
            required
          />
        </div>
        <div className="col-md-4">
          <label for="lname" className="form-label">
            Last name
          </label>
          <input
            type="text"
            name="lname"
            className="form-control"
            placeholder="Enter Last Name"
            onChange={updateState}
            value={data.lname}
            required
          />
        </div>
        <div className="col-md-4">
          <label for="validationDefaultUsername" className="form-label">
            Username
          </label>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend2">
              @
            </span>
            <input
              type="text"
              name="uname"
              className="form-control"
              aria-describedby="inputGroupPrepend2"
              placeholder="Enter Userame"
              onChange={updateState}
              value={data.uname}
              required
            />
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <label for="ucity" className="form-label">
            City
          </label>
          <input
            type="text"
            name="ucity"
            className="form-control"
            placeholder="Enter City"
            onChange={updateState}
            value={data.ucity}
            required
          />
        </div>
        <div className="col-md-3  mt-3">
          <label for="validationDefault04" className="form-label">
            State
          </label>
          <select
            className="form-select form-control"
            name="ustate"
            onChange={updateState}
            value={data.ustate}
            id="validationDefault04"
            required
          >
            <option selected disabled>
              Choose State
            </option>
            <option>...</option>
            <option>Uttar Pradesh</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Gujarat</option>
            <option>Bihar</option>
            <option>Rajasthan</option>
            <option>Punjab</option>
          </select>
        </div>
        <div className="col-md-3  mt-3">
          <label for="university" className="form-label">
            University
          </label>
          <input
            type="text"
            name="university"
            className="form-control"
            placeholder="Enter University/College Name"
            onChange={updateState}
            value={data.university}
            required
          />
        </div>

        <div className="col-md-3  mt-3">
          <label for="ucourse" className="form-label">
            Course
          </label>
          <input
            type="text"
            name="ucourse"
            className="form-control"
            placeholder="Enter Course"
            onChange={updateState}
            value={data.ucourse}
            required
          />
        </div>
        <div className="col-md-3  mt-3">
          <label for="ubranch" className="form-label">
            Branch
          </label>
          <input
            type="text"
            name="ubranch"
            className="form-control"
            placeholder="Enter Branch"
            onChange={updateState}
            value={data.ubranch}
            required
          />
        </div>
        <div className="col-md-3  mt-3">
          <label for="uyear" className="form-label">
            Year
          </label>
          <input
            type="number"
            name="uyear"
            min="1"
            className="form-control"
            placeholder="Enter Year"
            onChange={updateState}
            value={data.uyear}
            required
          />
        </div>
        <div className="col-md-3  mt-3">
          <label for="uevent" className="form-label">
            Event
          </label>
          <input
            type="text"
            name="uevent"
            className="form-control"
            placeholder="Enter Event"
            onChange={updateState}
            value={data.uevent}
            required
          />
        </div>
        <div className="col-md-6  mt-3">
          <label for="tname" className="form-label">
            Team Name
          </label>
          <input
            type="text"
            name="tname"
            className="form-control"
            placeholder="Enter Team Name"
            onChange={updateState}
            value={data.tname}
            required
          />
        </div>
        <div className="col-md-6 mt-3">
          <label for="tsize" className="form-label">
            Team Size
          </label>
          <input
            type="number"
            name="tsize"
            min="1"
            className="form-control"
            placeholder="Enter Team Size"
            onChange={updateState}
            value={data.tsize}
            required
          />
        </div>
        <div className="form-group form-label-group mt-4 mx-3">
          <input type="submit" className="btn btn-primary" value="Submit" />
        </div>
      </form>
    </div>
  );
};
export default Register;
