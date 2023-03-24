import React from 'react';
import { Collapse } from '../collapse';
import { useLocation } from 'react-router-dom';
import locationList from '../../data/logements.json';

let locationElement;

export function LocationDescription() {
	const location = useLocation();
	const locationPath = location.pathname;
	const locationID = locationPath.replace('/location/id=', '');
	locationElement = locationList.find((obj) => {
		return obj.id === locationID;
	});

	return (
		<section className="locationDetailsDiv">
			<div className="nameTagDiv">
				<CreateNameLocation />
				<CreateTagDiv />
			</div>
			<div className="authorRatingDiv">
				<CreateAuthorDiv />
				<CreateRatingStar />
			</div>
			<div className="descriptionAndEquipmentDiv">
				<CreateDescriptionDiv />
				<CreateEquipmentDiv />
			</div>
		</section>
	);
}

function CreateAuthorDiv() {
	const locationAuthorName = locationElement.host.name;
	const locationAuthorPic = locationElement.host.picture;

	return (
		<div className="locationAuthorNamePic">
			<h1 className="locationAuthorNameTitle">{locationAuthorName}</h1>
			<img
				className="locationAuthorPic"
				src={locationAuthorPic}
				alt={`profil de : ${locationAuthorName}, l'hôte de ce lieu`}
			></img>
		</div>
	);
}

function CreateDescriptionDiv() {
	const descriptionKey = 'descriptionKey';
	const descriptionTitle = 'Description';
	const descriptionContent = locationElement.description;
	return Collapse(descriptionTitle, descriptionContent, descriptionKey);
}
function CreateEquipmentDiv() {
	const equipmentKey = 'equipmentKey';
	const equipmentTitle = 'Equipements';
	const equipmentDetails = locationElement.equipments.map(
		(equipment, index) => EquipmentDetailsList(equipment, index)
	);
	return Collapse(equipmentTitle, equipmentDetails, equipmentKey);
}

function EquipmentDetailsList(i, j) {
	return (
		<React.Fragment key={`${j}${i}`}>
			<p>{i}</p>
		</React.Fragment>
	);
}

function CreateNameLocation(i) {
	const locationName = locationElement.title;
	const locationLocation = locationElement.location;

	return (
		<div className="locationLocationNameDiv">
			<h1 className="locationNameTitle">{locationName}</h1>
			<h2 className="locationLocationTitle">{locationLocation}</h2>
		</div>
	);
}

function CreateTagDiv() {
	const tagList = locationElement.tags.map((tag, index) =>
		CreateTag(tag, index)
	);
	return <div className="tagsDiv">{tagList}</div>;
}

function CreateTag(i, j) {
	return (
		<div
			className={`tagDiv`}
			key={`tagDivKey${j}`}
		>
			<p>{i}</p>
		</div>
	);
}

function CreateRatingStar() {
	const redStarRating = Number(locationElement.rating);
	const greyStarRating = 5 - redStarRating;
	const redStarArray = [];
	const greyStarArray = [];

	for (let i = 0; i < redStarRating; i++) {
		redStarArray.push(i);
	}
	for (let i = 0; i < greyStarRating; i++) {
		greyStarArray.push(i);
	}
	const showRedStars = redStarArray.map((_, index) => CreateStarRed(index));
	const showGreyStars = greyStarArray.map((_, index) =>
		CreateStarGrey(index)
	);

	return (
		<div className="ratingsDiv">
			{showRedStars}
			{showGreyStars}
		</div>
	);
}

function CreateStarRed(k) {
	return (
		<i
			key={`key${k}`}
			className="fa fa-solid fa-star RedStar"
		></i>
	);
}
function CreateStarGrey(k) {
	return (
		<i
			key={`key${k}`}
			className="fa fa-solid fa-star GreyStar"
		></i>
	);
}
