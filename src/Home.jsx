import React from 'react';
import web from '../src/images/AboutImages/3.jpg';
import { NavLink } from 'react-router-dom';
//import img from '../src/images/img1.jpg';
import Common from './Common';
import './index.css';
const Home = () => {
    return (
        // <h1>Welcome Homepage</h1>

        <Common name="Welcome to The Integral University" imgsrc={web} visit="/about" btname="Get Started" />
    );
};
export default Home;