import {Link} from 'react-router-dom';

export default function LoginPage() {

    function handleClick() {
		console.log('handle click called.');
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
				<div className="googleDiv">
					<button onClick = {() => handleClick()} className="googleLoginButton">
						<img alt="Google login" className="googleLoginImage" src="googleButton.png"/>
					</button>
					<p>Or sign in directly</p>
				</div>
			</div>
        </div>
    );
}
