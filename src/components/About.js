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
  
  let videoStyle = {
      "display": "block",
      "width":  "90%",
      "height": "215px",
      "margin": "20px",
     // "border": "5px green solid",
      "boxShadow": "0 0 10px #D8A7B1"
  };
  
  let para = {
    "color": "black",
    "textAlign": "left",
    "margin": "0 20px",
  };
  
  let para2 = {
      "color": "black",
      "textAlign": "left",
      "margin": "0 20px 0 20px",
  };
  
  return (
    <div style={container}>
      <h1 style={heading}>About</h1>
      <iframe style={videoStyle} width="400" height="225" src="https://www.youtube.com/embed/Si-CgH8FLto" title="Intro video about Jawahar Navodaya Vidyalaya, Kishanganj" frameborder="1" allowfullscreen></iframe>
      <p style={para}>JNV Kishanganj established in 1998 in accordance with NPE-1986, at permanent site of 32 Acres campus it is affiliated to CBSE with classes from 6th to 12th.</p>
      <br/>
      <p style={para2}>Admission to Vidyalayas is made at the class VI level through open test conducted at District level by Central Board Of Secondary Education (CBSE), New Delhi.</p>
    </div>
  );
};