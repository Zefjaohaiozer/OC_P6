import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import locationList from '../../data/logements.json';

let locationElement = [];
let showImageIndex;
let setShowImageIndex;

export function Carousel() {
	[showImageIndex, setShowImageIndex] = useState(0);
	return (
		<div id="carouselPapa">
			<CreateCarousel />
		</div>
	);
}

function CreateCarousel() {
	const location = useLocation();
	const locationPath = location.pathname;
	const locationID = locationPath.replace('/location/id=', '');
	locationElement = locationList.find((obj) => {
		return obj.id === locationID;
	});

	return (
		<React.Fragment>
			<div
				className="carouselImgDiv"
				style={{ transform: `translateX(-${showImageIndex * 100}%)` }}
			>
				{locationElement.pictures.map((picture, index) =>
					CreateOneDiv(picture, index)
				)}
			</div>
			{LengthCheck(locationElement.pictures)}
			{PictureCount(showImageIndex + 1, locationElement.pictures.length)}
		</React.Fragment>
	);
}

function CreateOneDiv(i, n) {
	const isActive = n === showImageIndex;

	return (
		<React.Fragment key={`divImgKey${i}`}>
			<img
				className={`imgCarouselDiv${n}  carouselImg ${
					isActive ? 'active' : ''
				}`}
				src={i}
				alt={i}
				id={`imgCarouselNb${n}`}
			></img>
		</React.Fragment>
	);
}
function LengthCheck(i) {
	console.log(i);
	return (
		<React.Fragment>
			{i.length > 1 ? <CreateNavArrows set={setShowImageIndex} /> : null},
		</React.Fragment>
	);
}

function CreateNavArrows() {
	console.log('je crée des flèches de navigation');

	const PreviousImage = () => {
		showImageIndex > 0
			? setShowImageIndex((showImageIndex) =>
					Math.max(showImageIndex - 1, 0)
			  )
			: setShowImageIndex(
					(showImageIndex) =>
						(showImageIndex = locationElement.pictures.length - 1)
			  );
	};
	const NextImage = () => {
		showImageIndex < locationElement.pictures.length - 1
			? setShowImageIndex((showImageIndex) =>
					Math.min(
						showImageIndex + 1,
						locationElement.pictures.length - 1
					)
			  )
			: setShowImageIndex((showImageIndex) => (showImageIndex = 0));
	};

	return (
		<div className="arrows">
			<div
				className="arrowLeft"
				onClick={PreviousImage}
			>
				<i className="fa fa-solid fa-chevron-left"></i>
			</div>
			<div
				className="arrowRight"
				onClick={NextImage}
			>
				<i className="fa fa-solid fa-chevron-right"></i>
			</div>
		</div>
	);
}

function PictureCount(i, j) {
	return (
		<div className="pictureCount">
			<p className="pictureCountText">
				{i}/{j}
			</p>
		</div>
	);
}
