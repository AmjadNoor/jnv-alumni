import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  let ulStyle = {
    height: "100%",
    width: "100%",
    position: "fixed",
    zIndex: "1",
    top: "0",
    bottom: "26px",
    marginTop: "55px",
    right: "0",
    backgroundColor: "#FAE8E0",
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  let listStyle = {
    fontSize: "30px",
    margin: "5px 0",
    userSelect: "none",
    listStyle: "none",
  };

  let listLinkStyle = {
    padding: "3px",
    userSelect: "none",
    textDecoration: "none",
    color: "black",
  };

  return (
    <ul style={ulStyle}>
      <li style={listStyle}>
        <Link to="/" style={listLinkStyle}>
          Home
        </Link>
      </li>
      <li style={listStyle}>
        <Link to="/about" style={listLinkStyle}>
          About
        </Link>
      </li>
      <li style={listStyle}>
        <Link to="/contact" style={listLinkStyle}>
          Contact Us
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
