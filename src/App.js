import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Products from './pages/Products.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Products />}>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
