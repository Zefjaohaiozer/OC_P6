import { BackgroundImg } from './backgroundimage';
import React from 'react';
import { AboutCreateContent } from './collapse';
import '../styles/about.css';
export function About() {
	return (
		<React.Fragment>
			<BackgroundImg />
			<AboutCreateContent />
		</React.Fragment>
	);
}
