import { Routes, Route } from 'react-router-dom';
import { About } from './components/apropos';
import { Location } from './components/locationpage';
import Home from './components/home';
import { NotFound } from './components/notfound';
import { Banner } from './components/banner';
export default function App() {
	return (
		<div className="app">
			<Banner />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/apropos"
					element={<About />}
				/>
				<Route
					path="/location/:id"
					element={<Location />}
				/>
				<Route
					path="/*"
					element={<NotFound />}
				/>
			</Routes>
		</div>
	);
}
