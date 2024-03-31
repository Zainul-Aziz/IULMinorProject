import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./index.css";
import Navbar from "./Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import SignupLogin from "./SignupLogin.jsx";
import Contact from "./Contact.jsx";
import Events from "./Events.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";
import Register from "./Register.jsx";
import EventsMoreInfo from "./EventsMoreInfo.jsx";
import Registrations from "./Registrations.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="EventsMoreInfo" element={<EventsMoreInfo />} />
        <Route path="registerORLogin" element={<SignupLogin />} />
        <Route path="registrations" element={<Registrations />} />
        {/* <Redirect to="/" /> */}
      </Routes>
      {/* </BrowserRouter> */}
      <Footer />
    </div>
  );
};
export default App;
