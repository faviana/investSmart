import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "./style.css";

const Footer = (props) =>{
	return (
		<div>
    <footer className="footer">
      <div className="container">
      <span className="footerLogo">Smart Investment  2018&#169;  
      <br />
              
             
                     <SocialIcon className="icon icon-image" url="https://www.linkedin.com/in/faviana-lopez-16598012a/" network="linkedin" color="#1eaa31e3" />              
                     <SocialIcon className="icon icon-image" url="https://www.instagram.com/siemprefavi/" network="instagram" color="#1eaa31e3" />
                     <SocialIcon className="icon icon-image" url="https://www.github.com/faviana" network="github" color="#1eaa31e3" />
                     <SocialIcon className="icon icon-image" url="https://www.twitter.com/Ms_Faviana" network="twitter" color="#1eaa31e3" />
            </span>
      </div>
</footer>
</div>
	);
}
export default Footer;