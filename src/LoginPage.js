export default function LoginPage() {

    function handleClick() {
		console.log('poop');
	}

    return (
        <div>
			<div class="contentDiv">
					<h1>My Budget</h1>
					<ul>
						<li class="feature-li">Set goals, enter transactions, and track progress</li>
						<li class="feature-li">Use checkpoints to ensure your budget is accurate</li>
					</ul>
					<div className="loginDiv">
						<div class="usernameDiv">
							<label>username:</label><input></input>
						</div>
						<div class="passwordDiv">
							<label>password:</label><input></input>
						</div>
						<div class="googleDiv">
							<button onClick = {() => handleClick()} class="googleLoginButton">
								<img alt="Google login" class="googleLoginImage" src="google_login_1.png"/>
							</button>
						</div>
					</div>
			</div>
        </div>
    );
}
