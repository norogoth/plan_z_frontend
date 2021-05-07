import NavigationBar from './NavigationBar.js';

import {useState, useEffect} from 'react';

export default function Budget() {
	const [budget, setBudget] = useState({});

	function getBudgetData(token) {
		//do some code
		console.log('getBudgetData() ran');
	}

	useEffect(()=>{
		getBudgetData();
	},[]);

	return (
		<div >
			<NavigationBar/>
				<div className="budgetDiv">
					<p>This is where teh boodget goes</p>
					<div className="progress">
						<div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
						</div>
					</div>
				</div>
		</div>
	);
}
