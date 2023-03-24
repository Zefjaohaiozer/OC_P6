import { Routes, Route } from 'react-router-dom';
import { About } from './components/apropos';
import { CheckUrl } from './components/locationpage';
import Home from './components/home';
import { NotFound } from './components/notfound';
import { Banner } from './components/banner';
import { Footer } from './components/footer';

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
					element={<CheckUrl />}
				/>
				<Route
					path="/*"
					element={<NotFound />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}
