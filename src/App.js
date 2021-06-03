import './App.css';
import LoginPage from './LoginPage';
import Budget from './Budget';
import Transactions from './Transactions';
import TransactionEntry from './TransactionEntry';
import CreateBudget from './CreateBudget';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import { useState } from 'react';

function App() {
	return (
		<Router>
			<Route path="/budget" component = {Budget}/>
			<Route path="/transactions" component = {Transactions}/>
			<Route path="/transactionEntry" component = {TransactionEntry}/>
			<Route path="/createBudget" component = {CreateBudget}/>
			<Route path="/" exact component = {LoginPage} />
		</Router>
	);
}

export default App;
