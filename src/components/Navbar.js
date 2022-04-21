import React from 'react';
import logo from '../img/logo.png';
//import Menu from './Menu';
import {Link} from 'react-router-dom';

export default function Navbar() {
  let navbarStyle = {
    "display": "inline-block",
    "background": "blanchedalmond",
    "width": "100%",
    "height": "55px",
    "position": "sticky",
    "top": "0",
    "boxShadow": "0 1px 12px rgb(105, 105, 105)",
  };
  
  let logoStyle = {
    "width": "35px",
    "height": "35px",
    "padding": "10px",
  };
  
  let titleStyle = {
    "textAlign": "left",
    "fontWeight": "200",
    "fontSize": "25px",
    "position": "relative",
    "top": "-47px",
    "left": "50px",
    "paddingTop": "5px",
    "width": "230px",
   // "textShadow": "1px 1px 3px black",
  };

  let menuStyle = {
    "float": "right",
    "position": "relative",
    "top": "-78px",
    "paddingRight": "10px",
    "color": "black",
  };

  return (
    <header style={navbarStyle}>
      <img style={logoStyle} src={logo} alt="JNV logo" />
      <h1 style={titleStyle}>JNV-KNE Alumni</h1>
      <Link to="/menu"><i style={menuStyle} className="fa-solid fa-bars fa-2x" /></Link>
      {/*<i id="xmark" class="fa-solid fa-xmark"></i>*/}
    </header>
  );
};