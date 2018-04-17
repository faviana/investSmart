import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Navbar = (props) => (
<div>
<nav className="navbar navbar-default">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

      <ul className="nav navbar-nav navbar-right">
        <li className="font-color"><Link to='/'onClick = {props.handleLogout}>Log Out</Link></li>
      </ul>
    
      <ul className="nav navbar-nav navbar-right">
        <li className="li-nav"><Link to="/contact">Contact</Link></li>
      </ul>

      <ul className="nav navbar-nav navbar-right">
        <li className="li-nav"><Link to="/about">About</Link></li>
      </ul>

      <ul className="nav navbar-nav navbar-right">
        <li className="logo"><Link to="/home">Smart Investment</Link></li>
      </ul>
    </div>
  </div>
</nav>
</div>
);

export default Navbar;






