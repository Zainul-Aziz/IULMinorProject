import React, { useEffect, useState } from "react";
import axios from "axios";
const Registrations = () => {
  const [registrationData, setregistrationData] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const result = await axios.get(
      "http://localhost:4000/app/registrationData"
    );
    setregistrationData(result.data.data);
  };
  return (
    <>
      <div className="container-fluid col-8">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Serial No.</th>
              <th scope="col">Event Name</th>
              <th scope="col">Team Name</th>
              <th scope="col">Team Person Name</th>
              <th scope="col">Team Person ID</th>
              {/* <th scope="col">Team Contact</th>
              <th scope="col">Team Size</th> */}
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr> */}
            {registrationData.map((event, index) => {
              return (
                <tr>
                  {/* <th scope="row">1</th> */}
                  <td>{index + 1}</td>
                  <td>{event.uevent}</td>
                  <td>{event.tname}</td>
                  <td>{event.fname + " " + event.lname}</td>
                  <td>{event.uname}</td>
                  {/* <td>{event.name}</td>
                  <td>{event.name}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Registrations;
