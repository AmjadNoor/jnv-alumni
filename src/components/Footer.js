import React from 'react';

export default function Footer() {
  
  let footerStyle = {
    "display": "block",
    "marginTop": "20px",
    "background": "black",
    "position": "absolute",
    "width": "100%",
    "bottom": "0",
    "boxShadow": "0 1px 12px #D8A7B1",
  };

  let paraStyle = {
    "textAlign": "center",
    "padding": "10px 0",
   // "color": "blanchedalmond",
   "color": "white",
    "background": "black",
  };
  
  let nameStyle = {
   // "color": "#EF7C8E"
   "color": "lightgreen",
  };
  
  return (
    <footer style={footerStyle}>
      <p style={paraStyle}>Copyright &copy; <span style={nameStyle}>Md Amjad Noor</span> 2022</p>
    </footer>
  );
};