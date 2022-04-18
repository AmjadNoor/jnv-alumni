import React from 'react';

export default function Footer() {
  
  let footerStyle = {
    "display": "block",
    "marginTop": "20px",
    "background": "black",
    "position": "relative",
    "width": "100%",
    "bottom": "0",
  };

  let paraStyle = {
    "textAlign": "center",
    "padding": "10px 0",
    "color": "blanchedalmond",
    "background": "black",
  };
  
  let nameStyle = {
    "color": "lightgreen"
  };
  
  return (
    <footer style={footerStyle}>
      <p style={paraStyle}>Copyright &copy; <span style={nameStyle}>Md Amjad Noor</span> 2022</p>
    </footer>
  );
};