import logements from '../data/logements.json';
import '../styles/gallery.css';
import React from 'react';
import { Slide } from 'react-reveal';

export function LocationPreview() {
	return logements.map((logement, index) => (
		<Slide
			left
			key={logement.id}
		>
			<div className="locationPreviewDiv">
				<a href={`/location/id=${logement.id}`}>
					<img
						src={logement.cover}
						alt={logement.description}
					/>
				</a>
				<h2 className="h2 locationPreviewTitle">{logement.title}</h2>
			</div>
		</Slide>
	));
}
