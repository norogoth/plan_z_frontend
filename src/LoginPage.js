export default function LoginPage() {

    function handleClick() {
		console.log('poop');
	}

    return (
        <div>
            <h1>Aaker Budget</h1>
            <ul>
                <li>Set goals, enter transactions, and track progress</li>
                <li>Use checkpoints to ensure your budget is accurate</li>
            </ul>
            <div className="loginDiv">
                <div class="usernameDiv">
                    <label>username:</label><input></input>
                </div>
                <div name="passwordDiv">
                    <label>password:</label><input></input>
                </div>
                <div name="googleDiv">
                    <label>Or log in with your Google Acount</label>
                    <button onClick = {() => handleClick()} class="googleLoginButton">
                        <img alt="Google login" class="googleLoginImage" src="google_login_1.png"/>
                    </button>
                </div>
            </div>
        </div>
    );
}