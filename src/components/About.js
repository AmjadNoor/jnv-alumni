import React from 'react';

export default function About() {
  
  let container = {
    "display": "block",
    "width": "100%",
  };
  
  let heading = {
    "textAlign": "center",
    "fontSize": "30px"
  };
  
  let para = {
    "color": "black",
    "textAlign": "center"
  };
  
  return (
    <div style={container}>
      <h1 style={heading}>About</h1>
      <p style={para}>Welcome to Jawahar Navodaya Vidyalaya, Kishanganj Alumni Web App.</p>
    </div>
  );
};