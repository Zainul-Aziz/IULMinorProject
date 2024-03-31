import React, { useEffect, useState } from "react";
import Card from "./Card";
import AddEvent from "./AddEvent";
import axios from "axios";
import { useSelector } from "react-redux";
//require("../src/images");
const Events = () => {
  const isAuth = useSelector((state) => state.authenticate.isAuth);
  const [eventsData, seteventsData] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const result = await axios.get("http://localhost:4000/app/get-image");
    //console.log(result);
    //console.log(result.data.data[0].name);
    seteventsData(result.data.data);
    //setAllImage(result.data.data);
  };

  return (
    // <h1>Welcome EventPage</h1>
    <>
      <section>
        <div className="my-5">
          <h1 className="text-center">Our Events</h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {
                  /* <Card eventImg={img} eventName="Andaz-e-Awadh" eventDesc="College students showcase their hidden talent." visit="" />
                        <Card eventImg={img} eventName="Andaz-e-Awadh" eventDesc="College students showcase their hidden talent." visit="" />
                        <Card eventImg={img} eventName="Andaz-e-Awadh" eventDesc="College students showcase their hidden talent." visit="" />
                        <Card eventImg={img} eventName="Andaz-e-Awadh" eventDesc="College students showcase their hidden talent." visit="" />
                        <Card eventImg={img} eventName="Andaz-e-Awadh" eventDesc="College students showcase their hidden talent." visit="" />
                        <Card eventImg={img} eventName="Andaz-e-Awadh" eventDesc="College students showcase their hidden talent." visit="" /> */

                  eventsData.map((event, index) => {
                    return (
                      <Card
                        key={index}
                        eventImg={event.image}
                        eventName={event.name}
                        eventTeamSize={event.team_size}
                        eventFee={event.fee}
                        eventDesc=""
                        //visit={val.register}
                      />
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      {isAuth && <AddEvent />}
    </>
  );
};
export default Events;
