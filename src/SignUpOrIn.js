export default function SignUpOrLogIn(){

    function handleClick() {
		console.log('handle click called.');
	}

    return (
        <div>
			<div className="loginDiv">
				<div className="usernameDiv">
					<label>username:</label><input></input>
				</div>
				<div className="passwordDiv">
					<label>password:</label><input></input>
				</div>
			</div>
        </div>
    );
}
