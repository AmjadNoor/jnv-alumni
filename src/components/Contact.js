import React from 'react';
import Footer from './Footer';

function Contact () {
  
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
        "textAlign": "left",
        "margin": "20px 20px 0 20px",
    };
  
    let para2 = {
        "color": "black",
        "textAlign": "left",
        "margin": "0 20px",
    };
  
    let pointer = {
        "fontWeight": "bold",
    };
  
    let email = {
        "textDecoration": "none",
    };
 
    return (
        <>
            <div style={container}>
                <h1 style={heading}>Contact Us</h1>
                <p style={para}><span style={pointer}>Address:</span> Jawahar Navodaya Vidyalaya, Village - Motihara, Post Office - Belwa, <br/> District - Kishanganj (Bihar)</p>
                <br/>
                <p style={para2}><span style={pointer}>Email:</span> <a style={email} href="mailto:jnvkishanganj@gmail.com">jnvkishanganj@gmail.com</a></p>
            </div>
            <Footer position="absolute"/>
        </>
    );
}

export default Contact;