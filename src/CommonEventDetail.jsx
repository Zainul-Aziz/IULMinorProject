import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../src/images/img1.jpg';
const CommonEventDetail = (props) => {
    return (
        // <h1>Welcome AboutPage</h1>
        <section id="header" className="mt-5 d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mb-3">
                            <h1>{props.name}</h1> 
                                {/* <h2 className="my-3">
                                Grow your extra skills.
                                </h2> */}
                                <p>{props.desc}</p>
                                <ul>
                                    <li>{props.rule1}</li>
                                    <li>{props.rule2}</li>
                                    <li>{props.rule3}</li>
                                    <li>{props.rule4}</li>
                                    <li>{props.rule5}</li>
                                </ul>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn btn-primary">{props.btname}</NavLink>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 order-1 order-2 header-img">
                                <img src={props.imgsrc} className="img-fluid placeImg" alt="homeimage"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    );
};
export default CommonEventDetail;