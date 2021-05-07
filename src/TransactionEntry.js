import NavigationBar from './NavigationBar.js';

export default function TransactionEntry() {
	
	return (
		<div>
			<NavigationBar/>
			<div className="teDiv"> 
				<p> This is where you ENTER the TRANSACTIONS?!?!?!</p>
				<span>
					<label>Date</label>
					<input/>
				</span>
				<span>
					<label>Category</label>
					<input/>
				</span>
				<span>
					<label>Amount</label>
					<input/>
				</span>
				<span>
					<label>Notes</label>
					<input style={{minHeight: "5rem"}}/>
				</span>
				<button className="btn-primary">
					submit
				</button>
			</div>
		</div>
	)
}
