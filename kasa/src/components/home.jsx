import { BackgroundImg } from './backgroundimage';
import { Gallery } from './gallery';
import React from 'react';

export default function Home() {
	return (
		<React.Fragment>
			<BackgroundImg />
			<Gallery />
		</React.Fragment>
	);
}
