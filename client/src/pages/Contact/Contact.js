import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



const Contact = (props) => (
    <div>
        <Navbar handleLogout ={props.handleLogout} />
          
        <Footer />
    </div>
);

export default Contact;