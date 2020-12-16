import React from 'react';
import logo from '../src/images/logo.png';
import desc from '../src/images/IU_InspiringExcellence.png';
const Footer = () =>
{
    return(
        <footer className="mt-5 p-5 bg-light text-center">
        <img src={logo} className="mb-1" alt="logo" /><br/>
        <img src={desc} className="mb-1" alt="desc" />
            <p>Integral University EventMaster @2020</p>
            <p>| All Rights Reserved |</p>
        </footer>
    )
};
export default Footer;