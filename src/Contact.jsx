import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    query: "",
  });
  const InputEvent = (event) => {
    //console.log(event.target.value);
    const { name, value } = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${data.name}, Your response saved successfully.`);
  };
  return (
    <div className="container my-3">
      <div className="rows">
        <div className="mt-5 col-md-6 col-lg-6 m-auto">
          <h2 className="text-center">Contact Us</h2>
          <form className="mt-3" onSubmit={formSubmit}>
            {/* <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                name="name"
                value={data.name}
                onChange={InputEvent}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div> */}

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="Input1"
                name="name"
                value={data.name}
                placeholder="Enter your name"
                onChange={InputEvent}
              />
              <label htmlFor="Input1">Your name</label>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="Input2"
                name="email"
                value={data.email}
                placeholder="Event name"
                onChange={InputEvent}
              />
              <label htmlFor="Input2">Your E-Mail</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="Input3"
                name="contact"
                value={data.contact}
                placeholder="Event name"
                onChange={InputEvent}
              />
              <label htmlFor="Input3">Your contact number</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="Input4"
                name="query"
                value={data.query}
                placeholder="Event name"
                onChange={InputEvent}
              />
              <label htmlFor="Input4">Query/Suggestion</label>
            </div>
            {/* <NavLink
              type="submit"
              variant="contained"
              color="primary"
              className="px-4"
              // className={classes.submit}
            >
              Submit
            </NavLink> */}
            <div className="form-group from-label-group">
              <input type="submit" className="btn btn-primary" value="Submit" />
            </div>
            {/* <button type="submit"  className="btn btn-outline-primary">Submit</button> */}
            {/* <label htmlFor="name" className="form-label">Name</label>
                        <input type="text"></input>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text"></input>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text"></input> */}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
