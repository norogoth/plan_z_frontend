import NavigationBar from './NavigationBar.js';
import { Link } from 'react-router-dom';

import {useState, useEffect} from 'react';

export default function Budget() {
	const [budget, setBudget] = useState({});
	const [modifyMode, setModMode] = useState(false);

	function getBudgetData(token) {
		console.log('getBudgetData() ran');
	}

	useEffect(()=>{
		getBudgetData();
	},[]);

	return (
		<div >
			<NavigationBar/>
			<div className="budgetDiv">
				<button> Modify budget </button>
				<button> 
					<Link to="/createBudget">
						Create New Budget 
					</Link>
				</button>
				<p>You currently have no budget set up.</p>
				<div className="progress">
					<div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
				</div>
					<div className="addDiv">
						{
							modifyMode && <button>Add Category</button>
						}
					</div>
			</div>
		</div>
	);
}
