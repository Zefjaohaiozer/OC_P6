import React from 'react';
import { useLocation } from 'react-router-dom';
import locationList from '../../data/logements.json';

export function Carousel() {
	return (
		<div id="carouselPapa">
			<CreateCarousel />
			<div id="carousel">BLABLA</div>{' '}
		</div>
	);
}

function CreateCarousel() {
	let locationElement = [];
	const location = useLocation();
	const locationPath = location.pathname;
	const locationID = locationPath.replace('/location/id=', '');
	console.log(locationID);
	locationElement = locationList.find((obj) => {
		return obj.id === locationID;
	});
	console.log(locationElement);
	return locationElement.pictures.map((picture, index) =>
		CreateOneDiv(picture, index)
	);
}

function CreateOneDiv(i, n) {
	return (
		<div className={`imgCarouselDiv${n}`}>
			<img
				src={i}
				alt={i}
				id={`imgCarouselNb${n}`}
			></img>
		</div>
	);
}
function LengthCheck(i) {
	if (i.length > 1) {
		return <div>FLECHE GAUCHE ET DROITE</div>;
	}
}
