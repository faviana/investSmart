import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



const Recipes = (props) => (
    <div>
        <Navbar handleLogout ={props.handleLogout} />
          
        <Footer />
    </div>
);

export default Recipes;