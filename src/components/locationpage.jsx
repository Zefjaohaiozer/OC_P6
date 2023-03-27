import { Carousel } from './locations/locationcarousel';
import React from 'react';
import { LocationDescription } from './locations/locationdescription';

import locationList from '../data/logements.json';
import { NotFound } from './notfound';
import '../styles/locationpage.css';
import { FindLocation } from './locations/findLocationId';

let locationElement = [];

export function CheckUrl() {
	locationElement = FindLocation(locationElement, locationList);
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
