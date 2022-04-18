import React from "react";
import {Link} from 'react-router-dom';

export default function menu() {
  
  let ulStyle = {
    "display": "block",
    "height": "auto",
    "width": "100%",
    "textAlign": "center",
    "color": "cyan",
  };
  
  let listStyle = {
    "fontSize": "30px",
    "margin": "5px 0",
    "userSelect": "none"
  };
  
  let listLinkStyle = {
    "padding": "3px",
    "userSelect": "none",
    "textDecoration": "none",
    "color": "cyan",
  };
  
  return (
    <ul style={ulStyle}>
      <li style={listStyle}><Link to="/" style={listLinkStyle}>Home</Link></li>
      <li style={listStyle}><Link to="/about" style={listLinkStyle}>About</Link></li>
      <li style={listStyle}><Link to="/contact" style={listLinkStyle}>Contact Us</Link></li>
    </ul>
  );
};