import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const SignUp = (props)=> {
	return (
		<div>

		{/* <Navbar /> */}
		<div className='container'>
			<div className='row'>
				<div className = 'col-sm-3'>
				</div>
				<div className = 'center signup-div col-sm-6'>
					<form name = "/auth/signup" onSubmit = {props.handleSubmit} className='signup-form'>
						<h1 className='logoName'>Smart Investment</h1>
							<hr />
						<h1 className="signup-title">Sign Up</h1>
							<br/>
						<div className='input-group-prepend'>
							<input className="form-control center" value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder="EMAIL"/>
						</div>
							<br/>
						<div className='input-group-prepend'>
							<input className=" center form-control" autoComplete="new-password" name='password' type='password' value = {props.password} onChange = {props.handleChange} placeholder="PASSWORD"/>
						</div>
							<br/>
							<br/>
							<input type="submit" style={{display:"none"}}/>
							<button id='signup-btn'  name = "/auth/signup" onClick = {props.handleSubmit} type = 'submit'>Submit</button>
					</form>
					<br />
					<p>Your are ready to enter a world of profit Log In below</p>
					<div className="container">
  						<div className="content">
							<svg id="more-arrows">
      							<polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
      							<polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
      							<polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
    						</svg>
  						</div>
					</div>			
					<Link className="signupLink" to = "/" >Log In</Link>
					<br />
				</div>
			</div>
			<Footer />			
		</div>
		</div>
	);
}
export default SignUp;