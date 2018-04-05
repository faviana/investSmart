import React from 'react';
import "./Footer.css";
import { SocialIcon } from 'react-social-icons';


const Footer = (props) =>{
	return (
    <div className='container'>
			<div className='row'>
				<div className = 'col-sm-3'>
				</div>
				<div className = 'center signin-div col-sm-6'>
	        <footer className="footer">
            <div className="container  foot-container">
                <span>Smart Investment  2018&#169;
                  <br />  
                  <br />
                  <div className="icon-image">
                    <SocialIcon className="icon" url="https://www.linkedin.com/in/faviana-lopez-16598012a/" network="linkedin" color="#1eaa31e3" />              
                    <SocialIcon className="icon" url="https://www.instagram.com/siemprefavi/" network="instagram" color="#1eaa31e3" />
                    <SocialIcon className="icon" url="https://www.github.com/faviana" network="github" color="#1eaa31e3" />
                    <SocialIcon className="icon" url="https://www.twitter.com/Ms_Faviana" network="twitter" color="#1eaa31e3" />
                    </div>
                </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
	);
}
export default Footer;