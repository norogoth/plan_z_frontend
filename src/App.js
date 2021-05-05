import './App.css';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Route path="/" component = {LoginPage} />
		</Router>
	);
}

export default App;
