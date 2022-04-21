import React from 'react';

function Footer(props) {
    
    let footerStyle = {
        "display": "block",
       "marginTop": "20px",
       "background": "black",
        "position": props.position,
       "width": "100%",
        "bottom": "0",
        "boxShadow": "0 -1px 12px #D8A7B1",
    };

    let paraStyle = {
        "textAlign": "center",
        "padding": "10px 0",
        "color": "white",
        "background": "black",
    };
  
    let nameStyle = {
        "color": "lightgreen",
    };
  
    return (
        <footer style={footerStyle}>
            <p style={paraStyle}>Copyright &copy; 2022 All rights reserved | <span style={nameStyle}>Md Amjad Noor</span></p>
        </footer>
    );
};

export default Footer;