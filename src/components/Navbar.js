import React from 'react';
import logo from '../img/logo.png';
import {Link} from 'react-router-dom';

function Navbar() {
    
    let navbarStyle = {
        display: "inline-block",
        background: "#B6E2D3",
        width: "100%",
        height: "55px",
        position: "sticky",
        top: "0",
        boxShadow: "0 1px 12px #D8A7B1",
    };
  
    let logoStyle = {
        width: "35px",
        height: "35px",
        padding: "10px",
    };
  
    let titleStyle = {
        textAlign: "left",
        fontWeight: "200",
        fontSize: "25px",
        position: "relative",
        top: "-47px",
        left: "50px",
        paddingTop: "5px",
        width: "230px",
    };

    let menuStyle = {
        float: "right",
        position: "relative",
        top: "-78px",
        marginRight: "10px",
        color: "black",
    };

    return (
        <header style={navbarStyle}>
            <img style={logoStyle} src={logo} alt="JNV logo" />
            <h1 style={titleStyle}>JNV Kishanganj</h1>
            <Link to="/menu"><i style={menuStyle} className="fa-solid fa-bars fa-2x" /></Link>
        </header>
    );
};

export default Navbar;