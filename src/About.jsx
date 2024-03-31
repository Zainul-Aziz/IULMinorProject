import React from "react";
import vc from "./images/VC12.jpg";
import dsw from "./images/dsw.jpg";
import Common from "./Common";
import img from "../src/images/AboutImages/img.jpg";
import img3 from "../src/images/AboutImages/1.jpg";
import img2 from "../src/images/AboutImages/2.jpg";
import img1 from "../src/images/AboutImages/3.jpg";
import img6 from "../src/images/AboutImages/4.jpg";
import img4 from "../src/images/AboutImages/5.jpg";
import img5 from "../src/images/AboutImages/6.jpg";
import CardAbout from "./CardAbout";
const About = () => {
  return (
    // <h1>Welcome AboutPage</h1>
    <div>
      <Common
        name="Welcome to About Page"
        imgsrc={img}
        visit="/events"
        btname="Events Listed"
      />
      <section>
        <div className="container-fluid" id="customer">
          <h1 className="text-center mt-5">Welcome To Fiesta </h1>
          <hr className="w-25 mx-auto pt-3" />
          <div className="row text-center mb-5 ">
            <div className="col-lg-6 col-md-6 col-12 m-auto cards">
              <div className="card">
                <div className="card-body">
                  <img src={vc} alt="VC" className="mb-5 placeImg" />
                  <blockquote className="text-center">
                    “I am extremely happy to invite students to “FIESTA-2019”,
                    the grand annual cultural, literary, artistic, and sports
                    festival to be held at Integral University, Lucknow on 01st
                    - 03rd March 2019. Integral University, which started from
                    an engineering college in 1998 to a full-fledged University
                    in 2004, is a premier NAAC accredited University in Uttar
                    Pradesh. It is recognized as a Scientific and Industrial
                    Research Organization (SIRO) by the Department of Scientific
                    & Industrial Research (DSIR), Ministry of Science &
                    Technology, Government of India. It offers more than 100
                    programs in Engineering, Sciences, Architecture,
                    Agriculture, Management,etc.”
                  </blockquote>
                  <p className="text-right">
                    Best wishes,<br></br>
                    Prof. S. W. Akhtar<br></br>
                    Chancellor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 m-auto cards">
              <div className="card">
                <div className="card-body">
                  <img src={dsw} alt="dsw" className="mb-5 placeImg" />
                  <blockquote className="text-center">
                    “It gives me immense pleasure to welcome students at the
                    “annual cultural, technical, literary and sports festival
                    “FIESTA- 2019” being organized at Integral University,
                    Lucknow from 01-03 March 2019. The festival, having plethora
                    of events, is planned, performed and enjoyed by the
                    students, which develops leadership and team building
                    qualities among them by unlocking their creativity and
                    sporting talents. To me events like Fiesta are de rigueur in
                    promoting the exchange of cultures, practices and diversity
                    of knowledge amongst the galaxy of participating students
                    from various reputed universities /colleges/institutions.”
                  </blockquote>
                  <p className="text-right">
                    Best wishes,<br></br>
                    Prof (Dr) M. A. Khalid<br></br>
                    Dean, Student’s Welfare
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-center mt-5 mb-5">Gallery Section</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <CardAbout eventImg={img1} eventName="" eventDesc="" visit="" />
                <CardAbout eventImg={img2} eventName="" eventDesc="" visit="" />
                <CardAbout eventImg={img3} eventName="" eventDesc="" visit="" />
                <CardAbout eventImg={img5} eventName="" eventDesc="" visit="" />
                <CardAbout eventImg={img4} eventName="" eventDesc="" visit="" />
                <CardAbout eventImg={img6} eventName="" eventDesc="" visit="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
