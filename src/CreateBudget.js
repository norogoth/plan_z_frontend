import NavigationBar from './NavigationBar';
import {useState, useEffect} from 'react';

export default function CreateBudget(props) {

	const [userCats, setUserCats] = useState([]);
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');

	function isNumeric(value) {
		return /^\d+$/.test(value);
	}

	function saveCatClick() {
		const newAmount = parseInt(amount);
		if (isNumeric(amount) && newAmount > 0){
			const newUserCats = [...userCats];
			const newUCObj = {name: name, amount: amount};
			newUserCats.push(newUCObj);
			setUserCats(newUserCats);
		}
		console.log(userCats);
	}

	function doneClick(){
		console.log('I clicked done');
	}

	function handleNameChange(event) {
		setName(event.target.value);
	}

	function handleAmountChange(event) {
		setAmount(event.target.value);
	}

	return (
		<div>
			<NavigationBar/>
			<div className="allCategoryDivs">
				<div>
					{userCats.map((item, i) => {
							return (<div id= {i} className="categoryPair">
										<label>{item.name}</label>
										<label>{item.amount}</label>
									</div>
									);
						})
					}
					<div className="inputPair">
						<input className="form-control" placeholder="name" value={name} onChange={handleNameChange}/>
						<input className="form-control" placeholder="amount" value={amount} onChange={handleAmountChange}/>
					</div>
				</div>
			</div>
				<button onClick={() => saveCatClick()}>Save Category</button>
				<button onClick={() => doneClick()}>Done</button>
		</div>
	);
}
