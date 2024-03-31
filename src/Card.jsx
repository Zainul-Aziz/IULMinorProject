import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  //   const imgsrc = `./images/${props.eventImg}`;
  //console.log(props);
  return (
    <div className="col-md-4 col-10  mx-auto mb-4">
      <div className="card placeImg">
        <img
          src={`/images/${props.eventImg}`}
          //   src={img}
          className="card-img-top"
          alt="imgcard"
        />
        <div className="card-body text-center">
          <h5 className="card-title text-center">{props.eventName}</h5>
          <p className="card-text">{props.eventDesc}</p>
          <NavLink
            // to={{
            //   pathname: "/EventsMoreInfo",
            //   propsData: {
            //     eventname: props.eventName,
            //     eventimage: props.eventImg,
            //   },
            // }}
            to="/EventsMoreInfo"
            state={{
              eventname: props.eventName,
              eventimage: props.eventImg,
              eventTeamSize: props.eventTeamSize,
              eventFee: props.eventFee,
            }}
            className="btn btn-primary"
          >
            More Info
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Card;
