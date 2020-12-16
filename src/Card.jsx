import React from 'react';
//import Register from "./Register";
import { NavLink } from 'react-router-dom';
const Card = (props) => {
    return(        
        <div className="col-md-4 col-10  mx-auto mb-4">
            <div className="card placeImg">
                <img src={props.eventImg} className="card-img-top" alt="imgcard" />
                <div className="card-body text-center">
                    <h5 className="card-title text-center">{props.eventName}</h5>
                    <p className="card-text">{props.eventDesc}</p>
                    <NavLink to={props.visit}  className="btn btn-primary" >More Info</NavLink>
                </div>
            </div>
        </div>                    
    );
};
export default Card;
