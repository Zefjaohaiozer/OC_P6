import { BackgroundImgAbout } from './backgroundimageabout.jsx';
import React from 'react';
import aboutList from '../data/about.json';
import '../styles/about.css';
import { Collapse } from './collapse';

export function About() {
	return (
		<React.Fragment>
			<BackgroundImgAbout />
			<div className="aboutDiv">
				<AboutCreateContent />
			</div>
		</React.Fragment>
	);
}
export function AboutCreateContent() {
	return aboutList.map((about, index) => AboutCollapse(about));
}
function AboutCollapse(i) {
	const aboutTitle = i.title;
	const aboutContent = i.content;
	const aboutId = i.id;
	return Collapse(aboutTitle, aboutContent, aboutId);
}
