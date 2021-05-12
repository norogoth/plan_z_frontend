import { GoogleLogin, GoogleLogout } from 'react-google-login';

import {Link} from 'react-router-dom';
import { useState } from 'react';

let clientId = process.env.REACT_APP_CLIENT_ID;
let responseGoogle = null;

console.log('Client ID: ',clientId);

export default function LoginPage() {
	const [loading, setLoading] = useState('Loading . . .');
	const [user, setUser] = useState(null);

	const handleLogin = async googleData => {
		
		console.log('fetch to backend was called.');

		const res = await fetch('http://localhost:8000/api/v1/auth/google', {
			method: 'POST',
			body: JSON.stringify({
				token: googleData.tokenId
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		console.log('res: ',res);
		const data = await res.json()
		responseGoogle = await data;

		console.log('fetch to back reached EOF');
	};
		
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
    onFailure={handleLogin}
    cookiePolicy={'single_host_origin'}
/><div className="googleDiv">
			{/*
					<button onClick = {() => handleLogin()} className="googleLoginButton">
						<img alt="Google login" className="googleLoginImage" src="googleButton.png"/>
					</button>
			*/}
				</div>
			</div>
        </div>
    );
}
