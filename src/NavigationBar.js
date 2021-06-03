import {Link} from 'react-router-dom';

export default function NavigationBar() {
	
	return (
		<div className="transactionDiv">
			<nav className="navbar navbar-dark bg-dark">
				<Link className="navbar-brand" to="/budget">Budget</Link>
				<Link className="navbar-brand" to="/transactions">Transactions</Link>
				<Link className="navbar-brand" to="/transactionEntry">Enter Purchase</Link>
			</nav>
		</div>
	)
}
