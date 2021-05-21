import jwt from 'jwt-decode' //This is DIFFERENT from jwt in express. This one decodes
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import {Redirect, Link} from 'react-router-dom';
import { useState } from 'react';

let clientId = process.env.REACT_APP_CLIENT_ID;

console.log('Client ID: ',clientId);

export default function LoginPage() {

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = async googleData => {
		
		console.log('fetch to backend was called.');

		const res = await fetch('http://localhost:8000/api/v1/auth/google',		{
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({
				token: googleData.tokenId
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const myJson = await res.json();
		setIsLoggedIn(true);
		console.log('json: ',myJson);

	};
	if (isLoggedIn) {
		return (<Redirect to='budget/' />);
	}
    return (
        <div>
			<div className="contentDiv">
				<h1 className="display-1"> Budget</h1>
				<ul className="featureList">
					<li className="feature-li">Set goals, enter transactions, and track progress</li>
					<li className="feature-li">Use checkpoints to ensure your budget is accurate</li>
				</ul>
				<div className="loginDiv">
					<div className="usernameDiv">
						<label>username:</label><input></input>
					</div>
					<div className="passwordDiv">
						<label>password:</label><input></input>
					</div>
					<button><Link to='/budget'>Log In</Link></button>
				</div>
				<GoogleLogin
					clientId={process.env.REACT_APP_CLIENT_ID}
					buttonText="Log in with Google"
					onSuccess={handleLogin}
					onFailure={(res) => {
							console.log('Google login failed. here was the response: ', res);
						}
					}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
        </div>
    );
}
