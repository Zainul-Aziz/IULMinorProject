import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddEvent = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [ename, setEname] = useState("");
  const [edesc, setEdesc] = useState("");
  const [eteamSize, seteteamSize] = useState();
  const [eParticipationFee, seteParticipationFee] = useState();

  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("ename", ename);
    formData.append("edesc", edesc);
    formData.append("eteamSize", eteamSize);
    formData.append("eParticipationFee", eParticipationFee);
    //console.log(formData);
    const result = await axios.post(
      "http://localhost:4000/app/upload-event-data",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.status === 200) {
      console.log("hello");
      // navigate("/events");
      window.location.href = "/events";
    }
  };

  return (
    <section className="mt-5 col-md-6 col-lg-6 m-auto">
      <form
        // action="/app/upload-event-data"
        // method="post"
        // enctype="multipart/form-data"
        onSubmit={uploadImage}
      >
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="Input1"
            value={ename}
            placeholder="Event name"
            onChange={(e) => {
              setEname(e.target.value);
            }}
          />
          <label htmlFor="Input1">Event Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="Input2"
            value={edesc}
            placeholder="Event Description"
            onChange={(e) => {
              setEdesc(e.target.value);
            }}
          />
          <label htmlFor="Input2">Event Description</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="Input3"
            min="1"
            value={eteamSize}
            placeholder="Team Size"
            onChange={(e) => {
              seteteamSize(e.target.value);
            }}
          />
          <label htmlFor="Input3">Team Size</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="Input4"
            min="100"
            value={eParticipationFee}
            placeholder="Participation Fee"
            onChange={(e) => {
              seteParticipationFee(e.target.value);
            }}
          />
          <label htmlFor="Input4">Participation Fee</label>
        </div>
        <input
          type="file"
          className="form-control"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />{" "}
        <br />
        <button type="submit" className="btn btn-primary">
          Add event
        </button>
      </form>
    </section>
  );
};

export default AddEvent;
