import React from 'react';
//import {Link} from 'react-router-dom';

export default function Contact () {
  
  let headingStyle = {
    "display": "block",
    "width": "100%",
    "textAlign": "center",
    "userSelect": "none",
  };
  
  return (
    <div>
      <h1 style={headingStyle}>Contact Us</h1>
      <p>Email: <a href="mailto:nooramjadmail.com@gmail.com">nooramjadmail.com@gmail.com</a></p>
    </div>
  );
}