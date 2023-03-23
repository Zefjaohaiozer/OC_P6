import logements from '../data/logements.json';
import '../styles/gallery.css';

export function LocationPreview() {
	return logements.map((logement, index) => (
		<div
			key={logement.id}
			className="locationPreviewDiv"
		>
			<a href={`/location/id=${logement.id}`}>
				<img
					src={logement.cover}
					alt={logement.description}
				/>
			</a>
			<h2 className="h2 locationPreviewTitle">{logement.title}</h2>
		</div>
	));
}
