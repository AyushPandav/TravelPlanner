import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"style={{paddingLeft: 13, textDecoration: 'none',color:"#1A202C",textAlign:"center"}}><b>Travit</b></div>
      <ul className="navbar-links">
        <li><Link to="/" className="navbar-link" style={{paddingLeft: 13, textDecoration: 'none',color:"#1A202C",textAlign:"center"}}>Home</Link></li>
        <li><Link to="/about" className="navbar-link"style={{paddingLeft: 13, textDecoration: 'none',color:"#1A202C",textAlign:"center"}}>About</Link></li>
        <li><Link to="/Plans" className="navbar-link"style={{paddingLeft: 13, textDecoration: 'none',color:"#1A202C",textAlign:"center"}}>Plans</Link></li>
        <li><Link to="/destinations" className="navbar-link"style={{paddingLeft: 13, textDecoration: 'none',color:"#1A202C",textAlign:"center"}}>Destinations</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;