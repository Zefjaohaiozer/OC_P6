import { Carousel } from './locations/locationcarousel';
import React from 'react';
import { LocationDescription } from './locations/locationdescription';
import { useLocation } from 'react-router-dom';
import locationList from '../data/logements.json';
import { NotFound } from './notfound';
import '../styles/locationpage.css';
let locationElement = [];

export function CheckUrl() {
	const location = useLocation();
	const locationPath = location.pathname;
	const locationID = locationPath.replace('/location/id=', '');
	locationElement = locationList.find((obj) => {
		return obj.id === locationID;
	});
	return locationElement != null ? Location() : NotFound();
}

function Location() {
	return (
		<section className="locationPage">
			<Carousel />
			<LocationDescription />
		</section>
	);
}
