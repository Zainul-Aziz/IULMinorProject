import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./index.css";
import Navbar from "./Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import SignUp from "./SignUp.jsx";
import Contact from "./Contact.jsx";
import Events from "./Events.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";
import Register from "./Register.jsx";
// import EventDetail from "./EventDetail";
import EventsMoreInfo from "./EventsFile/EventsMoreInfo.jsx";
import Registrations from "./Registrations.jsx";
import SignUpCopy from "./ADMLogin.jsx";
// import SignUp from "./SignUp";
//import LogIn from "./LogIn";
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <BrowserRouter> */}
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        {/* <Route path="eventdetail" element={<EventDetail />} /> */}
        <Route path="EventsMoreInfo" element={<EventsMoreInfo />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="Admin" element={<SignUpCopy />} />
        <Route path="registrations" element={<Registrations />} />
        {/* <Route path="SignUp" element={<SignUp />} /> */}
        {/* <Route path="LogIn" element={<LogIn />} /> */}
        {/* <Route path="contact" element={Contact} />
          <Route path="events" element={Events} />
          <Route path="register" element={Register} /> */}
        {/* <Route path="/eventdetail" element={EventDetail}/> */}
        {/* <Route path="/AndazAwadh" element={AndazAwadh} />
            <Route path="/Rush" element={Rush} />
            <Route path="/BBS" element={BBS} />
            <Route path="/Treasure" element={Treasure} />
            <Route path="/Nukkad" element={Nukkad} />
            <Route path="/Tekken" element={Tekken} />
            <Route path="/EventsMoreInfo" element={EventsMoreInfo} /> */}
        {/* <Route path="/signin" element={SignIn}/> */}
        {/* <Route path="/sign" element={SignUp} /> */}
        {/* <Route path="/login" element={LogIn}/> */}
        {/* <Redirect to="/" /> */}
        {/* <Home /> */}
        {/* </Route> */}
      </Routes>
      {/* </BrowserRouter> */}
      <Footer />
    </div>
  );
};
export default App;
