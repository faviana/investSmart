import React from "react";

const Nav = (props) => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          Smart Investing
        </a>
        <ul className="nav navbar-nav">
        <li className="active navbar-left"><a href="/">Home <span className="sr-only">(current)</span></a></li>
        <li className="navbar-left"><a href="/">About Us</a></li>
        <li><a href="/">Contact Us</a></li>
        <li className="navbar-right"><span onClick = {props.handleLogout}>Log Out</span></li>
        
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
// routes and it;s apis 