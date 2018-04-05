import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import Footer from "../Footer";


const SignIn  = (props)=> {
	return (
		<div className='container'>
			<div className='row'>
				<div className = 'col-sm-3'>
				</div>
				<div className = 'center signin-div col-sm-6'>
					<form name = "/auth/signin" onSubmit = {props.handleSubmit} className='signin-form'>
						<h1 className='logoName'>Smart Investment</h1>
							<hr />
						<h1 className="signin-title">LOG IN</h1>
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
								<button  className = 'signin-btn' name = "/auth/signin" onClick = {props.handleSubmit} type = 'submit' >Log In</button>
									<br />
					</form>
						<br />
					<p>If your are ready to enter a world of organization and profit Sign Up below</p>
					<div className="container">
  						<div className="content">
    						<svg id="more-arrows">
      							<polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
      							<polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
      							<polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
    						</svg>
  						</div>
					</div>			
					<Link to = "/signup" >Sign Up</Link>
						<br />
				</div>
			</div>
						

			<Footer />
		</div>
		
	);
}
export default SignIn;